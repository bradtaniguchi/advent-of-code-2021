const { getContents } = require("./day-3");

describe("getContents", () => {
  test("is function", () => expect(typeof getContents).toEqual("function"));
  test("returns data in correct format", () =>
    getContents().then((contents) => {
      expect(contents[0]).toEqual([0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1]);
    }));
});

describe("day3puzzle2", () => {
  test.todo("is function");
});

describe("day3puzzle2", () => {
  test.todo("is function");
});
