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
  let board;
  beforeEach(() => {
    board = new Board(formatData(EXAMPLE_DATA).boards[0]);
  });
  test("class exists", () => expect(Board).toBeTruthy());
  test("values property exists as Set", () =>
    expect(board.values).toBeInstanceOf(Set));
  test("values returns all values as Set", () =>
    expect(Array.from(board.values.values())).toEqual([
      22, 13, 17, 11, 0, 8, 2, 23, 4, 24, 21, 9, 14, 16, 7, 6, 10, 3, 18, 5, 1,
      12, 20, 15, 19,
    ]));
  test("marked exists as Set", () => expect(board.marked).toBeInstanceOf(Set));
  test("marked returns empty initially", () =>
    expect(Array.from(board.marked.values())).toEqual([]));
  test("mark marks value", () => {
    board.mark(13);
    expect(Array.from(board.marked.values())).toEqual([13]);
  });
  test("has returns false", () => expect(board.has(99)).toBe(false));
  test("has returns true", () => expect(board.has(13)).toBe(true));
  test("rowWinner returns winning row", () => {
    board.mark(8).mark(2).mark(23).mark(4).mark(24);
    expect(Array.from(board.rowWinner)).toEqual([8, 2, 23, 4, 24]);
  });
  test("colWinner returns winning column", () => {
    board.mark(2).mark(9).mark(10).mark(13).mark(12);
    expect(Array.from(board.colWinner)).toEqual([13, 2, 9, 10, 12]);
  });
  test("leftRightDiagonalWinner returns winning left-right diagonal", () => {
    board.mark(2).mark(22).mark(14).mark(18).mark(19);
    expect(Array.from(board.leftRightDiagonalWinner)).toEqual([
      22, 2, 14, 18, 19,
    ]);
  });
  test("rightLeftDiagonalWinner returns winning right-left diagonal", () => {
    board.mark(1).mark(10).mark(14).mark(4).mark(0);
    expect(Array.from(board.rightLeftDiagonalWinner)).toEqual([
      0, 4, 14, 10, 1,
    ]);
  });
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
