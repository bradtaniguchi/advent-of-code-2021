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
const getMostCommonBits = (binaryNumArr) =>
  binaryNumArr && binaryNumArr.length
    ? binaryNumArr
        .reduce(
          (mostCommonBits, binaryNum) =>
            binaryNum.forEach((num, index) =>
              num
                ? (mostCommonBits[index].ones = mostCommonBits[index].ones + 1)
                : (mostCommonBits[index].zeroes =
                    mostCommonBits[index].zeroes + 1)
            ) || mostCommonBits,
          new Array(binaryNumArr[0].length).fill(null).map(() => ({
            ones: 0,
            zeroes: 0,
          }))
        )
        .map(({ ones, zeroes }) => (ones > zeroes ? 1 : 0))
    : [];

/**
 * Flips binary arr.
 * @param binaryNum {number[]} array of integers
 * @returns {number[]} the flipped array
 */
const binaryArrFlip = (binaryNum) => binaryNum.map((num) => (num ? 0 : 1));
/**
 * The binary number in array form to number
 * @param binaryNum {number[]} array of integers
 */
const binaryArrToNum = (binaryNum) => parseInt(binaryNum.join(""), 2);

// Multiplying the gamma rate (22) by the epsilon r

/**
 * Calculates the gamma and epsilon values, which can then be used
 * to get the final power consumption value.
 * @params binaryNumArr {number[][]} 2d array of numbers, where
 * each "row" is an array of numbers, where the entire row represents a single
 * binary number.
 * @returns {object} object where the epsilon and gamma rates.
 */
const getGammaAndEpsilon = (binaryArrNum) => {
  const mostCommonBits = getMostCommonBits(binaryArrNum);
  const leastCommonBits = binaryArrFlip(mostCommonBits);
  return {
    gamma: binaryArrToNum(mostCommonBits),
    epsilon: binaryArrToNum(leastCommonBits),
  };
};

module.exports = {
  day3puzzle1,
  day3puzzle2,
  getContents,
  getMostCommonBits,
  binaryArrFlip,
  binaryArrToNum,
  getGammaAndEpsilon,
};
