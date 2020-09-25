# aws-work

## using cloudformation deploy and test lambda function

- 1.create dynamodb table
  > `./script/create-table.sh`
- 2.create sns error notify
  > 2.1 `./script/create-sns.sh`  
  >  2.2 copy snsTopicArn from sns-name.json file and update src/config.js
- 3.create s3 bucket name for code deploy
  > `./script/create-bucket.sh`
- 4.build lambda layer
  > `./script/build-layer.sh`
- 5.deploy stack by cloudformation
  > s3 trigger: `npm run deploy`  
  > api gateway trigger: `npm run deploy -- api`
- 6.invoke lambda function by event
  > s3 trigger: `npm run invoke`  
  > api gateway trigger: `npm run invoke -- api`

## test && coverage

- first create a s3 and upload a normal csv data file and a error format file, and then
  update event.json or event-error.json file, some test need.
- execute test by `npm run test`
- execute coverage by `npm run coverage`
