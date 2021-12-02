const { readFile } = require("fs").promises;
const { join } = require("path");

/**
 * Challenge link:
 * https://adventofcode.com/2021/day/1
 */
const puzzle1 = () => getContents().then(getIncreasing);

/**
 * Returns the raw contents of a file as an array of strings
 */
const getContents = () =>
  readFile(join(__dirname, "./puzzle-1-input.txt"), "utf-8").then((contents) =>
    contents.split("\n").map(Number)
  );

/**
 * Returns the count of increasing numbers
 * @param num {number[]} array of numbers to get the number of
 * increasing numbers
 */
const getIncreasing = (nums) =>
  nums.reduce(
    (acc, num, index, arr) => (arr[index - 1] < num ? (acc += 1) : acc),
    0
  );

module.exports = {
  puzzle1,
  getContents,
  getIncreasing,
};
