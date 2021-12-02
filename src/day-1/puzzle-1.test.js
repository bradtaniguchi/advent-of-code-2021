const { puzzle1, getContents, getIncreasing } = require("./puzzle-1");

describe("puzzle-1", () => {
  test("is function", () => expect(typeof puzzle1 === "function").toBe(true));
  test("returns challenge answer for input", () =>
    expect(puzzle1()).resolves.toEqual(1448));

  describe("getContents", () => {
    test("is function", () =>
      expect(typeof getContents === "function").toBe(true));
    test("resolves array of numbers", () =>
      getContents().then((contents) => {
        expect(Array.isArray(contents)).toBe(true);
        expect(typeof contents[0] === "number").toBe(true);
      }));
  });

  describe("getIncreasing", () => {
    test("is function", () =>
      expect(typeof getIncreasing === "function").toBe(true));
    test("returns 0 if given empty array", () =>
      expect(getIncreasing([])).toEqual(0));
    test("returns 0 if given 1 item", () =>
      expect(getIncreasing([199])).toEqual(0));
    test("return 1 if given 2 items, increasing", () =>
      expect(getIncreasing([199, 200])).toEqual(1));
    test("return 0 if given 2 items, decreasing", () =>
      expect(getIncreasing([200, 199, 198])).toEqual(0));
    test("return 2 if given 3 items, increasing", () =>
      expect(getIncreasing([199, 200, 205])).toEqual(2));
    test("return 1 if given 3 items, mixed", () =>
      expect(getIncreasing([199, 198, 200])).toEqual(1));
    test("handles example case", () =>
      expect(
        getIncreasing([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])
      ).toEqual(7));
  });
});
