const { day4Puzzle1, getContents, formatData, Board } = require("./day-4");

describe("day4Puzzle1", () => {
  test("is function", () => expect(typeof day4Puzzle1).toEqual("function"));
});

describe("getContents", () => {
  test("is function", () => expect(typeof getContents).toEqual("function"));
});

describe("formatData", () => {
  test("is function", () => expect(typeof formatData).toEqual("function"));
  test("returns drawn numbers from first line", () => {
    const { drawn } = formatData(EXAMPLE_DATA);
    expect(drawn).toEqual([
      7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22,
      18, 20, 8, 19, 3, 26, 1,
    ]);
  });
  test("returns boards", () => {
    const { boards } = formatData(EXAMPLE_DATA);
    // just check the first one for simplicity
    const board = boards[0];
    expect(boards.length).toEqual(3);
    expect(board).toEqual([
      [22, 13, 17, 11, 0],
      [8, 2, 23, 4, 24],
      [21, 9, 14, 16, 7],
      [6, 10, 3, 18, 5],
      [1, 12, 20, 15, 19],
    ]);
  });
});

describe("Board", () => {
  test.todo("class exists");
  test.todo("values property exists as Set");
  test.todo("values returns all values as Set");
  test.todo("marked exists as Set");
  test.todo("marked returns empty initially");
  test.todo("mark marks value");
  test.todo("has returns false");
  test.todo("has returns true");
  test.todo("rowWinner returns winning row");
  test.todo("colWinner returns winning column");
  test.todo("leftRightDiagonalWinner returns winning left-right diagonal");
  test.todo("rightLeftDiagonalWinner returns winning right-left diagonal");
});

/**
 * Example data provided, used with most of the tests.
 */
const EXAMPLE_DATA = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`;
