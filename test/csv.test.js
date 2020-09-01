const { checkCsvData } = require("../index");
const s3Data = {
  AcceptRanges: "bytes",
  LastModified: "2020-08-31T12:54:13.000Z",
  ContentLength: 639,
  ETag: '"576b56295ee88a44161ddaf8e464cfdb"',
  ContentType: "text/csv",
  Metadata: {},
  Body: Buffer.from([
    97,
    116,
    105,
    116,
    117,
    100,
    101,
    44,
    108,
    111,
    110,
    103,
    105,
    116,
    117,
    100,
    101,
    44,
    97,
    100,
    100,
    114,
    101,
    115,
    115,
    10,
    45,
    52,
    51,
    46,
    53,
    56,
    50,
    57,
    57,
    56,
    48,
    53,
    44,
    49,
    52,
    54,
    46,
    56,
    57,
    51,
    55,
    51,
    52,
    57,
    55,
    44,
    34,
    56,
    52,
    48,
    32,
    67,
    79,
    67,
    75,
    76,
    69,
    32,
    67,
    82,
    69,
    69,
    75,
    32,
    82,
    68,
    44,
    32,
    82,
    69,
    67,
    72,
    69,
    82,
    67,
    72,
    69,
    32,
    84,
    65,
    83,
    32,
    55,
    49,
    48,
    57,
    34,
    10,
    45,
    52,
    51,
    46,
    53,
    56,
    50,
    53,
    57,
    54,
    51,
    53,
    44,
    49,
    52,
    54,
    46,
    56,
    57,
    52,
    48,
    50,
    49,
    49,
    55,
    44,
    34,
    56,
    51,
    51,
    32,
    67,
    79,
    67,
    75,
    76,
    69,
    32,
    67,
    82,
    69,
    69,
    75,
    32,
    82,
    68,
    44,
    32,
    82,
    69,
    67,
    72,
    69,
    82,
    67,
    72,
    69,
    32,
    84,
    65,
    83,
    32,
    55,
    49,
    48,
    57,
    34,
    10,
    45,
    52,
    51,
    46,
    53,
    56,
    49,
    54,
    57,
    56,
    55,
    56,
    44,
    49,
    52,
    54,
    46,
    56,
    57,
    56,
    50,
    52,
    54,
    51,
    49,
    44,
    34,
    56,
    55,
    48,
    32,
    67,
    79,
    67,
    75,
    76,
    69,
    32,
    67,
    82,
    69,
    69,
    75,
    32,
    82,
    68,
    44,
    32,
    82,
    69,
    67,
    72,
    69,
    82,
    67,
    72,
    69,
    32,
    84,
    65,
    83,
    32,
    55,
    49,
    48,
    57,
    34,
    10,
    45,
    52,
    51,
    46,
    53,
    56,
    48,
    57,
    53,
    54,
    51,
    55,
    44,
    49,
    52,
    54,
    46,
    56,
    56,
    54,
    53,
    49,
    49,
    55,
    56,
    44,
    34,
    56,
    49,
    48,
    32,
    67,
    79,
    67,
    75,
    76,
    69,
    32,
    67,
    82,
    69,
    69,
    75,
    32,
    82,
    68,
    44,
    32,
    82,
    69,
    67,
    72,
    69,
    82,
    67,
    72,
    69,
    32,
    84,
    65,
    83,
    32,
    55,
    49,
    48,
    57,
    34,
    10,
    45,
    52,
    51,
    46,
    53,
    56,
    48,
    55,
    57,
    52,
    55,
    57,
    44,
    49,
    52,
    54,
    46,
    56,
    56,
    55,
    48,
    49,
    57,
    57,
    49,
    44,
    34,
    56,
    49,
    50,
    32,
    67,
    79,
    67,
    75,
    76,
    69,
    32,
    67,
    82,
    69,
    69,
    75,
    32,
    82,
    68,
    44,
    32,
    82,
    69,
    67,
    72,
    69,
    82,
    67,
    72,
    69,
    32,
    84,
    65,
    83,
    32,
    55,
    49,
    48,
    57,
    34,
    10,
    45,
    52,
    51,
    46,
    53,
    56,
    48,
    55,
    52,
    48,
    49,
    49,
    44,
    49,
    52,
    54,
    46,
    56,
    56,
    54,
    51,
    53,
    49,
    49,
    55,
    44,
    34,
    56,
    48,
    56,
    32,
    67,
    79,
    67,
    75,
    76,
    69,
    32,
    67,
    82,
    69,
    69,
    75,
    32,
    82,
    68,
    44,
    32,
    82,
    69,
    67,
    72,
    69,
    82,
    67,
    72,
    69,
    32,
    84,
    65,
    83,
    32,
    55,
    49,
    48,
    57,
    34,
    10,
    45,
    52,
    51,
    46,
    53,
    56,
    48,
    53,
    54,
    57,
    48,
    53,
    44,
    49,
    52,
    54,
    46,
    56,
    56,
    54,
    51,
    55,
    54,
    50,
    54,
    44,
    34,
    56,
    48,
    54,
    32,
    67,
    79,
    67,
    75,
    76,
    69,
    32,
    67,
    82,
    69,
    69,
    75,
    32,
    82,
    68,
    44,
    32,
    82,
    69,
    67,
    72,
    69,
    82,
    67,
    72,
    69,
    32,
    84,
    65,
    83,
    32,
    55,
    49,
    48,
    57,
    34,
    10,
    45,
    52,
    51,
    46,
    53,
    56,
    48,
    51,
    55,
    49,
    48,
    54,
    44,
    49,
    52,
    54,
    46,
    56,
    56,
    54,
    52,
    55,
    53,
    55,
    50,
    44,
    34,
    56,
    48,
    52,
    32,
    67,
    79,
    67,
    75,
    76,
    69,
    32,
    67,
    82,
    69,
    69,
    75,
    32,
    82,
    68,
    44,
    32,
    82,
    69,
    67,
    72,
    69,
    82,
    67,
    72,
    69,
    32,
    84,
    65,
    83,
    32,
    55,
    49,
    48,
    57,
    34,
    10,
    45,
    52,
    51,
    46,
    53,
    56,
    48,
    49,
    48,
    49,
    49,
    55,
    44,
    49,
    52,
    54,
    46,
    56,
    56,
    54,
    55,
    49,
    49,
    53,
    54,
    44,
    34,
    56,
    48,
    48,
    32,
    67,
    79,
    67,
    75,
    76,
    69,
    32,
    67,
    82,
    69,
    69,
    75,
    32,
    82,
    68,
    44,
    32,
    82,
    69,
    67,
    72,
    69,
    82,
    67,
    72,
    69,
    32,
    84,
    65,
    83,
    32,
    55,
    49,
    48,
    57,
    34,
    10,
    10,
  ]),
};

describe("csv data test", () => {
  test("normal data", () => {
    const data = `latitude,longitude,address
    -43.58299805,146.89373497,"840 COCKLE CREEK RD, RECHERCHE TAS 7109"
    -43.58259635,146.89402117,"833 COCKLE CREEK RD, RECHERCHE TAS 7109"
    `;
    // const data = s3Data.Body.data;
    const records = checkCsvData(data);
    expect(records.length).toBe(2);
  });

  test("normal data from s3 data", () => {
    const data = s3Data.Body;
    const records = checkCsvData(data);
    expect(records.length).toBe(9);
  });

  test("error data, miss data", () => {
    const data = `latitude,longitude,address
-43.58299805,"840 COCKLE CREEK RD, RECHERCHE TAS 7109"
-43.58259635,146.89402117,"833 COCKLE CREEK RD, RECHERCHE TAS 7109"
`;
    const records = checkCsvData(data);
    expect(records.length).toBe(2);
  });

  test("error data, column miss match", () => {
    const data = `latitude1,longitude1,address
-43.58299805,146.89373497,"840 COCKLE CREEK RD, RECHERCHE TAS 7109"
-43.58259635,146.89402117,"833 COCKLE CREEK RD, RECHERCHE TAS 7109"
`;
    const records = checkCsvData(data);
    expect(records.length).toBe(2);
  });

  test("error data, data format error", () => {
    const data = `latitude,longitude,address
-43.58299805,[146.89373497],"840 COCKLE CREEK RD, RECHERCHE TAS 7109"
-43.58259635,146.89402117,"833 COCKLE CREEK RD, RECHERCHE TAS 7109"
`;
    const records = checkCsvData(data);
    expect(records.length).toBe(2);
  });
});