const {
  day1Puzzle2,
  getContents,
  getGroupIncreasing
} = require("./day-1-puzzle-2");

describe("day1Puzzle2", () => {
  test("is function", () =>
    expect(typeof day1Puzzle2 === "function").toBe(true));
  test("returns challenge answer for input", () =>
    expect(day1Puzzle2()).resolves.toEqual(1471));

  describe("getContents", () => {
    test("is function", () =>
      expect(typeof getContents === "function").toBe(true));
    test("resolves array of numbers", () =>
      getContents().then(contents => {
        expect(Array.isArray(contents)).toBe(true);
        expect(typeof contents[0] === "number").toBe(true);
      }));
  });

  describe("getGroupIncreasing", () => {
    test("is function", () =>
      expect(typeof getGroupIncreasing).toEqual("function"));
    test("returns 0 if given empty array", () =>
      expect(getGroupIncreasing([])).toEqual(0));
    test("returns 0 if given 1 item", () =>
      expect(getGroupIncreasing([199])).toEqual(0));
    test("return 0 if given 2 items", () =>
      expect(getGroupIncreasing([199, 200])).toEqual(0));
    test("return 0 if given 3 items", () =>
      expect(getGroupIncreasing([199, 200, 201])).toEqual(0));
    test("return 1 if given 4 items, with second set increasing", () =>
      expect(getGroupIncreasing([200, 200, 200, 201])).toEqual(1));
    test("return 0 if given 4 items, with second set decreasing", () =>
      expect(getGroupIncreasing([200, 200, 200, 199])).toEqual(0));
    test("handles example case", () =>
      expect(
        getGroupIncreasing([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])
      ).toEqual(5));
  });
});
