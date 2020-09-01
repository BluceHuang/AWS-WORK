const AWS = require("aws-sdk");
const parse = require("csv-parse/lib/sync");
const md5 = require("md5-node");
const stringify = require("json-stringify-safe");

AWS.config.region = "ap-east-1";
const s3 = new AWS.S3();
const sns = new AWS.SNS();
const docClient = new AWS.DynamoDB.DocumentClient();

const columns = ["latitude", "longitude", "address"];
columns.sort();
const LATITUDE = "latitude";
const LONGITUDE = "longitude";

const batchWriteSize = 20;
const tableName = "t_address";

const snsTopicArn = "arn:aws:sns:ap-east-1:666125933515:csvDataReceiveError";

/**
 * check csv data
 */
exports.checkCsvData = (data) => {
  const records = parse(data, {
    columns: true,
    skip_empty_lines: true,
    delimiter: ",",
  });

  console.log(JSON.stringify(records));

  // check data is empty or not
  if (!Array.isArray(records) || records.length === 0) {
    throw "csv data format error";
  }

  // check clumns
  const dataColumns = Object.keys(records[0]);
  if (columns.length != dataColumns.length) {
    throw "csv data error, clumn length mismatch";
  }
  dataColumns.sort();
  for (let i = 0; i < columns.length; i++) {
    if (columns[i] !== dataColumns[i]) {
      throw "csv data error, column name mismatch";
    }
  }
  return records;
};

exports.getBatchWriteData = (records, offset, size) => {
  const requestParams = {
    RequestItems: {},
  };
  requestParams.RequestItems[tableName] = [];
  for (let j = 0; j < size; j++) {
    const id = md5(JSON.stringify(records[offset + j]));
    records[offset + j][LATITUDE] = parseFloat(records[offset + j][LATITUDE]);
    records[offset + j][LONGITUDE] = parseFloat(records[offset + j][LONGITUDE]);
    requestParams.RequestItems[tableName].push({
      PutRequest: { Item: Object.assign({ id }, records[offset + j]) },
    });
  }
  return requestParams;
};

exports.publishSnsMessage = async (msg) => {
  const params = {
    Message: msg,
    TopicArn: snsTopicArn,
  };

  try {
    const result = await sns.publish(params).promise();
    console.log(`Message ${msg} send sent to the topic ${params.TopicArn}`);
    console.log("MessageID is " + result.MessageId);
  } catch (err) {
    console.error(`publish sns message fail, ${JSON.stringify(err)}`);
  }
};

exports.handler = async (event) => {
  const srcBucket = event.Records[0].s3.bucket.name;
  const srcKey = decodeURIComponent(
    event.Records[0].s3.object.key.replace(/\+/g, "")
  );

  // Infer the csv type from the file suffix.
  const typeMatch = srcKey.match(/\.([^.]*)$/);
  if (!typeMatch) {
    console.log("Could not determine the csv type.");
    return;
  }

  // Check that the csv type is supported
  const csvType = typeMatch[1].toLowerCase();
  if (csvType !== "csv") {
    console.log(`Unsupported type`);
    return;
  }

  console.log(`receive this event ${JSON.stringify(event)}`);

  try {
    const csvData = await s3
      .getObject({ Bucket: srcBucket, Key: srcKey })
      .promise();
    console.log(JSON.stringify(csvData));
    const records = this.checkCsvData(csvData.Body);
    const total = records.length;
    const loopTotal = Math.ceil(total / batchWriteSize);

    for (let i = 0; i < loopTotal; i++) {
      const offset = i * batchWriteSize;
      const handleSize = i < loopTotal - 1 ? batchWriteSize : total - offset;
      const requestParams = this.getBatchWriteData(records, offset, handleSize);
      console.log("write to dynamodb ...");
      docClient.batchWrite;
      const result = await docClient.batchWrite(requestParams).promise();
      console.log(stringify(result));
      if (
        result.UnprocessedItems &&
        result.UnprocessedItems[tableName] &&
        result.UnprocessedItems[tableName].length > 0
      ) {
        const errMsg = `s3 file ${srcBucket}/${srcKey} ${tableName} unprocess data ${JSON.stringify(
          result.UnprocessedItems
        )}`;
        console.error(errMsg);
        await this.publishSnsMessage(errMsg);
      }
    }
  } catch (err) {
    console.error(err);
    await this.publishSnsMessage(
      `s3 file ${srcBucket}/${srcKey} ${JSON.stringify(err)}`
    );
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({}),
  };
  return response;
};
