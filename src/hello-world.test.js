const helloWorld = require("./hello-world");
// sanity test
describe("hello world", () => {
  test("returns hello world!", () => expect(helloWorld()).toBe("hello world!"));
});
