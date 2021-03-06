const {
  day2Puzzle1,
  day2Puzzle2,
  getContents,
  getFinalPos,
  getFinalPosWithAim,
} = require("./day-2");

describe("getContents", () => {
  test("resolves to array of arrays", () =>
    getContents().then((contents) => {
      expect(Array.isArray(contents)).toBe(true);
      const [direction, number] = contents[0];
      expect(typeof direction).toBe("string");
      expect(typeof number).toBe("number");
    }));
  test('first value is "forward 5"', () =>
    getContents().then((contents) => {
      const firstRow = contents[0];
      expect(firstRow).toEqual(["forward", 5]);
    }));
});

describe("day1Puzzle1", () => {
  test("is function", () =>
    expect(typeof day2Puzzle1 === "function").toBe(true));
  test("returns challenge answer for input", () =>
    expect(day2Puzzle1()).resolves.toEqual(1507611));

  describe("getFinalPos", () => {
    test("is function", () => expect(typeof getFinalPos).toEqual("function"));
    test("returns example input", () =>
      expect(
        getFinalPos([
          ["forward", 5],
          ["down", 5],
          ["forward", 8],
          ["up", 3],
          ["down", 8],
          ["forward", 2],
        ])
      ).toEqual(150));
  });
});

describe("day1Puzzle1", () => {
  test("is function", () =>
    expect(typeof day2Puzzle2 === "function").toBe(true));
  test("returns challenge answer for input", () =>
    expect(day2Puzzle2()).resolves.toEqual(1880593125));

  describe("getFinalPosWithAim", () => {
    test("is function", () =>
      expect(typeof getFinalPosWithAim).toEqual("function"));
    test("returns example input", () =>
      expect(
        getFinalPosWithAim([
          ["forward", 5],
          ["down", 5],
          ["forward", 8],
          ["up", 3],
          ["down", 8],
          ["forward", 2],
          // horizontal 15, depth 60
        ])
      ).toEqual(900));
  });
});
