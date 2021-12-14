const { readFile } = require("fs").promises;
const { join } = require("path");

const day4Puzzle1 = (contents) =>
  contents ? Promise.resolve(contents) : getContents();

/**
 * Returns the contents in the input file
 * @returns {drawn: number[]; boards: number[][]}
 */
const getContents = () =>
  readFile(join(__dirname, "./day-3-input.txt"), "utf-8").then(formatData);

/**
 * Formats the contents of the file into a more usable format
 * @param {string} contents
 * @returns {drawn: number[]; boards: number[][]}
 */
const formatData = (contents) => {
  let lines = contents.split("\n");
  const drawn = lines[0].split(",").map((n) => parseInt(n, 10));

  // remove the first 2 rows, and remove blank lines.
  lines = lines.slice(2).filter((_) => !!_);
  const boardSize = 5;
  const numBoards = lines.length / 5;
  const boards = [];
  for (let i = 0; i < numBoards; i++) {
    const start = i * 5;
    boards.push(
      lines.slice(start, start + boardSize).map((line) =>
        line
          .split(" ")
          .filter((num) => num !== "")
          .map(Number)
      )
    );
  }
  return {
    drawn,
    boards,
  };
};

/**
 * A class representing a 2d board array.
 * @class
 * @param {number[][]} board array of values representing the actual value of the board
 * @property {Set<number>} values set of values within the board
 * @property {Set<number>} marked set of values that are "marked" within the board.
 */
class Board {
  /**
   * Returns the values that are marked in the board result in a
   * winning board.
   * @returns {boolean} if the board is a winner
   */
  get isWinner() {
    // if the board hasn't had enough items marked, then its automatically
    // not a winner.
    if (this.marked.length < 5) return false;
    /**
     * We are to check the following:
     *
     * 1. If any row is a winner
     * 2. If any column is a winner
     * 3. If left-right diagonal is a winner
     * 4. If right-left diagonal is a winner
     */
    return !!(
      this.rowWinner ||
      this.colWinner ||
      this.leftRightDiagonalWinner ||
      this.rightLeftDiagonalWinner
    );
  }

  /**
   * Returns the winning values that are marked on the board,
   * or undefined if there isn't one
   * @returns {number[] | undefined} the array of winning values, or undefined
   */
  get winningValues() {
    // if the board hasn't had enough items marked, then its automatically
    // not a winner.
    if (this.marked.length < 5) return false;
    return (
      this.rowWinner ||
      this.colWinner ||
      this.leftRightDiagonalWinner ||
      this.rightLeftDiagonalWinner
    );
  }

  /**
   * Returns the row that is fully marked, or undefined if not found
   * @returns {number[] | undefined} the array of the "winning row", or undefined
   * if there isn't one
   */
  get rowWinner() {
    if (!Array.isArray(this.boardArr)) return;
    return this.boardArr.find(
      (row) => Array.isArray(row) && row.every((num) => this.marked.has(num))
    );
  }

  /**
   * Returns the column that is fully marked, or undefined if not found
   * @returns {number[] | undefined} the array of the "winning column", or undefined
   * if there isn't one
   */
  get colWinner() {
    if (!Array.isArray(this.boardArr)) return;
    for (let colIndex = 0; colIndex < 5; colIndex++) {
      const col = this.boardArr.map((row) => row[colIndex]);
      if (col.every((num) => this.marked.has(num))) return col;
    }
    return;
  }

  /**
   * Returns if the left-right diagonal is fully marked, or undefined if not found
   * @returns {number[] | undefined} the array of the "winning diagonal", or undefined
   * if there isn't one
   */
  get leftRightDiagonalWinner() {
    if (!Array.isArray(this.boardArr)) return;
    const diagonal = [];
    for (let rowIndex = 0; rowIndex <= 4; rowIndex++) {
      const row = this.boardArr[rowIndex];
      if (!Array.isArray(row)) return;
      const num = row[rowIndex];
      if (!this.marked.has(num)) return;
      diagonal.push(num);
    }
    return diagonal;
  }
  /**
   Returns if the right-left diagonal is fully marked, or undefined if not found
   * @returns {number[] | undefined} the array of the "winning diagonal", or undefined
   * if there isn't one
   */
  get rightLeftDiagonalWinner() {
    if (!Array.isArray(this.boardArr)) return;
    const diagonal = [];
    for (let rowIndex = 0; rowIndex <= 4; rowIndex++) {
      const row = this.boardArr[rowIndex];
      if (!Array.isArray(row)) return;
      const colIndex = 4 - rowIndex;
      const num = row[colIndex];
      if (!this.marked.has(num)) return;
      diagonal.push(num);
    }
    return diagonal;
  }

  constructor(boardArr) {
    if (!boardArr || !Array.isArray(boardArr))
      throw new Error("boardArr must be an array");
    this.boardArr = boardArr;
    // do data validation
    if (boardArr.length !== 5)
      throw new Error("Invalid board columns given, needs to be of length 5");
    const invalidRow = boardArr.find(
      (row) => !Array.isArray(row) || row.length !== 5
    );
    if (invalidRow) {
      throw new Error("Invalid board row given, needs to be of length 5");
    }
    this.values = this._getValues();
    this.marked = new Set();
  }

  /**
   * Returns the values of the board as a set of numbers.
   * @returns {Set<number>} a Set of numbers this board has.
   * @private
   */
  _getValues() {
    const values = new Set();
    for (let row of this.boardArr) {
      for (let value of row) {
        values.add(value);
      }
    }
    return values;
  }

  /**
   * Marks the given value in the board.
   * @param {number} num the num to mark
   * @returns {Board} this
   */
  mark(num) {
    if (this.values.has(num)) this.marked.add(num);
    return this;
  }

  /**
   * If the board has the given number.
   * @param {number} num the num to check
   * @returns {boolean} if this board has the number
   */
  has(num) {
    return this.values.has(num);
  }
}

module.exports = {
  day4Puzzle1,
  getContents,
  formatData,
  Board,
};
