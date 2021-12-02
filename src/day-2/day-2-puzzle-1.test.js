const { day2Puzzle1, getContents } = require("./day-2-puzzle-1");

describe("day1Puzzle1", () => {
  test("is function", () =>
    expect(typeof day2Puzzle1 === "function").toBe(true));
  // test("returns challenge answer for input", () =>
  //   expect(day2Puzzle1()).resolves.toEqual(0));

  describe("getContents", () => {
    test("resolves to array of arrays", () =>
      getContents().then((contents) => {
        expect(Array.isArray(contents)).toBe(true);
        const [direction, number] = contents[0];
        expect(typeof direction).toBe("string");
        expect(typeof number).toBe("number");
      }));
  });

  // describe('getFinalPos', () => {

  // });
});