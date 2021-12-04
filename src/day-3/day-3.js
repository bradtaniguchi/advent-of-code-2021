const { readFile } = require("fs").promises;
const { join } = require("path");

const day3puzzle1 = () => {};

const day3puzzle2 = () => {};

const getContents = () =>
  readFile(join(__dirname, "./day-3-input.txt"), "utf-8").then((contents) =>
    contents.split("\n").map((binary) => binary.split("").map(Number))
  );

module.exports = {
  day3puzzle1,
  day3puzzle2,
  getContents,
};
