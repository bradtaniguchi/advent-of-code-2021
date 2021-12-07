const { readFile } = require("fs").promises;
const { join } = require("path");

/**
 * Returns the value of the day 3 puzzle.
 * Unlike the previous days, this function takes in the contents, otherwise it will
 * use the input file. Making the whole test easier to test.
 * @param {number[][] | undefined} contents  contents to use if given, otherwise
 * we will read the input file
 * @returns the puzzle 1 value.
 */
const day3Puzzle1 = (contents) =>
  (contents ? Promise.resolve(contents) : getContents()).then(
    (binaryNumArr) => {
      const { gamma, epsilon } = getGammaAndEpsilon(binaryNumArr);
      return gamma * epsilon;
    }
  );

const day3Puzzle2 = (contents) =>
  (contents ? Promise.resolve(contents) : getContents()).then(
    (binaryNumArr) => {
      const oxygen = getOxygen(binaryNumArr);
      const co2 = getCo2(binaryNumArr);
      return oxygen * co2;
    }
  );

/**
 * Returns the input file in a "binary number array"
 * @returns {number[][]} a 2d array where each row represents a binary number.
 */
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
 * @params {number[][]} binaryNumArr 2d array of numbers, where
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

/**
 * Generic function that calculates the rating based on the binaryNumArray.
 * Used to get the oxygen and co2 ratings
 * @param {number[][]} binaryNumArr array of numbers, where each row is an array of numbers
 * @param {function} function that is used to compare the zeroes and ones
 * for the given column
 *
 * @returns {number} the rating.
 */
const getRating = (binaryNumArr, deciderFunc) => {
  if (!binaryNumArr || !binaryNumArr.length) {
    return null;
  }
  const rowLength = binaryNumArr[0].length;
  let current = binaryNumArr;
  let ones = [];
  let zeroes = [];
  for (let binaryNumIndex = 0; binaryNumIndex < rowLength; binaryNumIndex++) {
    if (!current.length) {
      // if there are no more current elements, return null;
      return null;
    }
    if (current.length === 1) {
      // if there is just 1, then we found the latest
      return binaryArrToNum(current[0]);
    }
    for (let rowIndex = 0; rowIndex < current.length; rowIndex++) {
      if (current[rowIndex][binaryNumIndex] === 1) {
        ones.push(current[rowIndex]);
        continue;
      }
      if (current[rowIndex][binaryNumIndex] === 0) {
        zeroes.push(current[rowIndex]);
        continue;
      }
    }
    current = deciderFunc({ ones, zeroes });
    ones = [];
    zeroes = [];
  }
  if (!current) {
    throw new Error("No elements found!");
  }
  if (current.length !== 1) {
    throw new Error("More than 1 final element found: " + current);
  }
  return binaryArrToNum(current[0]);
};

/**
 * Returns the oxygen rating. Defaults to ones in a tie
 */
const getOxygen = (binaryNumArr) =>
  getRating(binaryNumArr, ({ zeroes, ones }) =>
    ones.length === zeroes.length || ones.length > zeroes.length ? ones : zeroes
  );

const getCo2 = (binaryNumArr) =>
  getRating(binaryNumArr, ({ zeroes, ones }) =>
    ones.length === zeroes.length || ones.length > zeroes.length ? zeroes : ones
  );

module.exports = {
  day3Puzzle1,
  day3Puzzle2,
  getContents,
  getMostCommonBits,
  binaryArrFlip,
  binaryArrToNum,
  getGammaAndEpsilon,
  getOxygen,
  getCo2,
};
