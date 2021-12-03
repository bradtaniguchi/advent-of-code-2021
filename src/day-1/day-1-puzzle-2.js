const { readFile } = require("fs").promises;
const { join } = require("path");

/**
 * Puzzle 2 for day 1:
 * https://adventofcode.com/2021/day/1#part2
 */
const day1Puzzle2 = () => getContents().then(getGroupIncreasing);

/**
 * Returns the raw contents of a file as an array of strings
 */
const getContents = () =>
  readFile(join(__dirname, "./day-1-puzzle-2-input.txt"), "utf-8").then(
    contents => contents.split("\n").map(Number)
  );

/**
 * Returns the grouped increasing amount.
 * @params nums {number[]} array of numbers to group and check
 * for increasing
 */
const getGroupIncreasing = nums => {
  let groupsIncreasing = 0;
  for (let index = 0; index < nums.length; index++) {
    const first = nums[index];
    const second = nums[index + 1];
    const third = nums[index + 2];
    const fourth = nums[index + 3];

    const firstGroup = first + second + third;
    const secondGroup = second + third + fourth;
    if (firstGroup < secondGroup) groupsIncreasing++;
  }

  return groupsIncreasing;
};

module.exports = {
  day1Puzzle2,
  getContents,
  getGroupIncreasing
};
