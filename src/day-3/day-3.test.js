const {
  day3puzzle1,
  day3puzzle2,
  getContents,
  getMostCommonBits,
  binaryArrFlip,
  binaryArrToNum,
  getGammaAndEpsilon,
} = require("./day-3");

describe("getContents", () => {
  test("is function", () => expect(typeof getContents).toEqual("function"));
  test("returns data in correct format", () =>
    getContents().then((contents) => {
      expect(contents[0]).toEqual([0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1]);
    }));
});

describe("day3puzzle1", () => {
  test.todo("is function");
});

describe("day3puzzle2", () => {
  test.todo("is function");
});

describe("getMostCommonBits", () => {
  test("is function", () =>
    expect(typeof getMostCommonBits).toEqual("function"));
  test("returns most common for single binary num", () =>
    expect(getMostCommonBits([[1, 0, 1, 1, 1]])).toEqual([1, 0, 1, 1, 1]));
});

describe("binaryArrFlip", () => {
  test("returns flipped bits", () =>
    expect(binaryArrFlip([1, 0, 1])).toEqual([0, 1, 0]));
});

describe("binaryArrToNum", () => {
  test("returns num", () => expect(binaryArrToNum([1, 0, 1])).toEqual(5));
});

describe("getGammaAndEpsilon", () => {
  test("returns values", () =>
    expect(getGammaAndEpsilon([[1, 0, 1]])).toEqual({ epsilon: 2, gamma: 5 }));
});
