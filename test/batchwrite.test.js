const { getBatchWriteData } = require("../src/index");
const data = [
  {
    latitude: "-43.58299805",
    longitude: "146.89373497",
    address: "840 COCKLE CREEK RD, RECHERCHE TAS 7109",
  },
  {
    latitude: "-43.58259635",
    longitude: "146.89402117",
    address: "833 COCKLE CREEK RD, RECHERCHE TAS 7109",
  },
  {
    latitude: "-43.58169878",
    longitude: "146.89824631",
    address: "870 COCKLE CREEK RD, RECHERCHE TAS 7109",
  },
  {
    latitude: "-43.58095637",
    longitude: "146.88651178",
    address: "810 COCKLE CREEK RD, RECHERCHE TAS 7109",
  },
  {
    latitude: "-43.58079479",
    longitude: "146.88701991",
    address: "812 COCKLE CREEK RD, RECHERCHE TAS 7109",
  },
  {
    latitude: "-43.58074011",
    longitude: "146.88635117",
    address: "808 COCKLE CREEK RD, RECHERCHE TAS 7109",
  },
  {
    latitude: "-43.58056905",
    longitude: "146.88637626",
    address: "806 COCKLE CREEK RD, RECHERCHE TAS 7109",
  },
  {
    latitude: "-43.58037106",
    longitude: "146.88647572",
    address: "804 COCKLE CREEK RD, RECHERCHE TAS 7109",
  },
  {
    latitude: "-43.58010117",
    longitude: "146.88671156",
    address: "800 COCKLE CREEK RD, RECHERCHE TAS 7109",
  },
];
const batchWriteSize = 9;

describe("test batch write", () => {
  test("batch write request data", () => {
    const request = getBatchWriteData(data, 0, 2);
    console.log(JSON.stringify(request));
  });

  test("loop get batch write request", () => {
    const total = data.length;
    const loopTotal = Math.ceil(total / batchWriteSize);

    for (let i = 0; i < loopTotal; i++) {
      const offset = i * batchWriteSize;
      const handleSize = i < loopTotal - 1 ? batchWriteSize : total - offset;
      const requestParams = getBatchWriteData(data, offset, handleSize);
      console.log(JSON.stringify(requestParams));
    }
  });
});
