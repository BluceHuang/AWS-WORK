const { handler } = require("../src/index");
const event = require("../event.json");
const errEvent = require("../event-error.json");
const apiEvent = require("../event-api.json");
const { InvalidDataError } = require("../src/error");

describe("csv data test", () => {
  test("accpet s3 event", async () => {
    jest.setTimeout(10000);
    const result = await handler(event);
    console.log(JSON.stringify(result));
    expect(result.statusCode).toBe(0);
  });

  test("accpet s3 error data", async () => {
    jest.setTimeout(10000);
    const result = await handler(errEvent);
    console.log(JSON.stringify(result));
    expect(result.statusCode).toBe(InvalidDataError);
  });

  test("accept api event", async () => {
    const result = await handler(apiEvent);
    console.log(JSON.stringify(result));
    expect(result.statusCode).toBe(0);
  });
});
