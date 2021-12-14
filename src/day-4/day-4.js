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
      lines.slice(start, start + boardSize).map(
        (line) =>
          line
            .split(" ")
            .filter((num) => num !== "")
            .map(Number)
        // .map(Number)
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
     * 4. If left-right diagonal is a winner
     */
    // TODO:
    return false;
  }
  constructor(boardArr) {
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
    for (let column of this.boardArr) {
      for (let value of column) {
        values.add(value);
      }
    }
    return values;
  }

  /**
   * Marks the given value in the board.
   * @param {number} num the num to mark
   * @returns {undefined | Set<number>} the set of values that are marked, or undefined if
   * the value isn't in the board.
   */
  mark(num) {
    if (this.values.has(num)) return this.marked.add(num);
    return undefined;
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
