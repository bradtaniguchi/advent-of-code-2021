const { puzzle1, getContents } = require("./puzzle-1");

describe("puzzle-1", () => {
  test("is function", () =>
    expect(typeof getContents === "function").toBe(true));

  describe("getContents", () => {
    test("is function", () =>
      expect(typeof getContents === "function").toBe(true));
    test("resolves array of strings", () =>
      getContents().then((contents) => {
        expect(Array.isArray(contents)).toBe(true);
        expect(typeof contents[0] === "string").toBe(true);
      }));
  });
});
