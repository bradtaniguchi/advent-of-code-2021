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
const formatData = (contents) => {};

module.exports = {
  day4Puzzle1,
  getContents,
};
