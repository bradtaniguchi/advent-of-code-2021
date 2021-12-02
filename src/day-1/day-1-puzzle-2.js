const { readFile } = require("fs").promises;
const { join } = require("path");

const day1Puzzle2 = () => {};

/**
 * Returns the raw contents of a file as an array of strings
 */
const getContents = () =>
  readFile(join(__dirname, "./day-1-puzzle-2-input.txt"), "utf-8").then(
    (contents) => contents.split("\n").map(Number)
  );

module.exports = {
  day1Puzzle2,
  getContents,
};
