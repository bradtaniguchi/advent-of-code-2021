const { readFile } = require("fs").promises;
const { join } = require("path");

const day3puzzle1 = () => getContents();

const day3puzzle2 = () => getContents();

const getContents = () =>
  readFile(join(__dirname, "./day-3-input.txt"), "utf-8").then((contents) =>
    contents.split("\n").map((binary) => binary.split("").map(Number))
  );

/**
 * Returns the most common bits from the input 2d array.
 * @params binaryNumArr {number[][]} 2d array of numbers, where
 * each "row" is an array of numbers, where the entire row represents a single
 * binary number.
 * @returns {number[]} the array of numbers that are calcualted
 * to be the "most common bits"
 */
const getMostCommonBits = (binaryNumArr) => {
  if (!binaryNumArr || !binaryNumArr.length) return [];
  return binaryNumArr
    .reduce(
      (mostCommonBits, binaryNum) => {
        binaryNum.forEach((num, index) => {
          const mostCommonBitBit = mostCommonBits[index];
          return num
            ? (mostCommonBitBit.ones = mostCommonBitBit.ones + 1)
            : (mostCommonBitBit.zeroes = mostCommonBitBit.zeroes + 1);
        });
        return mostCommonBits;
      },
      new Array(binaryNumArr[0].length).fill(null).map(() => ({
        ones: 0,
        zeroes: 0,
      }))
    )
    .map(({ ones, zeroes }) => (ones > zeroes ? 1 : 0));
};

module.exports = {
  day3puzzle1,
  day3puzzle2,
  getContents,
  getMostCommonBits,
};
