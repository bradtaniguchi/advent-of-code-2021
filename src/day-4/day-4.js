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

module.exports = {
  day4Puzzle1,
  getContents,
  formatData,
};
