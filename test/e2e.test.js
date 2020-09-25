const { handler } = require("../src/index");
const event = require("../event.json");
const apiEvent = require("../event-api.json");

describe("csv data test", () => {
  test("accpet s3 event", async () => {
    const result = await handler(event);
    console.log(JSON.stringify(result));
    expect(result.statusCode).toBe(0);
  });

  test("accept api event", async () => {
    const result = await handler(apiEvent);
    console.log(JSON.stringify(result));
    expect(result.statusCode).toBe(0);
  });
});
