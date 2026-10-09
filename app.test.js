const test = require("node:test");
const assert = require("node:assert/strict");
const { getMessage } = require("./app");

test("returns the expected greeting", () => {
  assert.equal(
    getMessage(),
    "Hello from my CI/CD pipeline!!!"
  );
});