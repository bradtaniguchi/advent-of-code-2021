const { readFile } = require("fs").promises;
const { join } = require("path");

/**
 * Challenge link:
 * https://adventofcode.com/2021/day/1
 */
const puzzle1 = () => getContents().then(split);

const getContents = () =>
  readFile(join(__dirname, "./puzzle-1-input.txt"), "utf-8").then((contents) =>
    contents.split("\n")
  );

module.exports = {
  puzzle1,
  getContents
};
