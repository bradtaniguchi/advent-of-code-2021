const {
  day3Puzzle1,
  day3Puzzle2,
  getContents,
  getMostCommonBits,
  binaryArrFlip,
  binaryArrToNum,
  getGammaAndEpsilon,
  getOxygen,
  getCo2,
} = require("./day-3");

describe("getContents", () => {
  test("is function", () => expect(typeof getContents).toEqual("function"));
  test("returns data in correct format", () =>
    getContents().then((contents) => {
      expect(contents[0]).toEqual([0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1]);
    }));
});

describe("day3Puzzle1", () => {
  test("is function", () => expect(typeof day3Puzzle1).toEqual("function"));
  test("returns test function input", () =>
    expect(
      day3Puzzle1([
        [0, 0, 1, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 1, 1, 0],
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [0, 1, 1, 1, 1],
        [0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 0, 0, 1],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 1, 0],
      ])
    ).resolves.toEqual(198));
  test("returns challenge answer input", () =>
    expect(day3Puzzle1()).resolves.toEqual(738234));
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

describe("getRating", () => {
  test("returns null if given nothing", () => {
    expect(getOxygen()).toEqual(null);
    expect(getCo2()).toEqual(null);
  });
  test("returns null if given empty array", () => {
    expect(getOxygen([])).toEqual(null);
    expect(getCo2()).toEqual(null);
  });
  test("returns number if given just 1", () => {
    expect(getOxygen([[1, 0, 1]])).toEqual(5);
    expect(getCo2([[1, 0, 1]])).toEqual(5);
  });
  test("returns example", () => {
    const exampleInput = [
      [0, 0, 1, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 1, 1, 0],
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [0, 1, 1, 1, 1],
      [0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 1],
      [0, 0, 0, 1, 0],
      [0, 1, 0, 1, 0],
    ];
    expect(getOxygen(exampleInput)).toEqual(23);
    expect(getCo2(exampleInput)).toEqual(10);
  });
});
