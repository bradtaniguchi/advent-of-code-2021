const { day1Puzzle2, getContents } = require("./day-1-puzzle-2");

describe("day1Puzzle2", () => {
  test("is function", () =>
    expect(typeof day1Puzzle2 === "function").toBe(true));

  describe("getContents", () => {
    test("is function", () =>
      expect(typeof getContents === "function").toBe(true));
    test("resolves array of numbers", () =>
      getContents().then((contents) => {
        expect(Array.isArray(contents)).toBe(true);
        expect(typeof contents[0] === "number").toBe(true);
      }));
  });
});
