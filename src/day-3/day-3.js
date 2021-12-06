const { readFile } = require("fs").promises;
const { join } = require("path");

/**
 * Returns the value of the day 3 puzzle.
 * Unlike the previous days, this function takes in the contents, otherwise it will
 * use the input file. Making the whole test easier to test.
 * @param contents {number[][] | undefined} contents to use if given, otherwise
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

const day3Puzzle2 = () => getContents();

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

/**
 * A Binary Trie node implementation, which is a form
 * of a Trie, except there is only 2 types of children, "ones" and "zeroes."
 *
 * This data structure should be built in roughly O(n) time, and
 * finding an element takes O(L) time, where `n` is the number
 * of elements and `L` is the depth of the tree.
 *
 * I'm not 100% sure if this is actually called a "Binary Trie", or if
 * its just a type of binary tree, but its rather close to a Trie, and
 *
 * will be used as such.
 *
 * @see: https://en.wikipedia.org/wiki/Trie
 */
class BinaryTrieNode {
  /**
   * @param value {number} either a 1 or 0,
   * @param parent {BinaryTrieNode} the reference to the parent node, if not given
   * defaults to null.
   */
  constructor(value, parent) {
    this.value = value;
    this.parent = parent || null;
  }

  /**
   * Returns the parent nodes, recursively.
   * Can be used with static print methods to get
   * the binary values up to this point.
   * @returns {BinaryTrieNode[]} returns the binary trie nodes in order from
   * the "root" binary trie node.
   */
  get parents() {
    const parents = [];
    let currentParent = this.parent;
    while (currentParent) {
      // while there is a parent, add it to the front of the parents list
      parents.unshift(currentParent);
      currentParent = this.parent.parent;
    }
    return parents;
  }

  // TODO:
  // 1. add display methods
  // 2. add "add" method,
  // 3. add "counter" methods for each child.
  // 4. add "zeroes" and "ones" children values
}

/**
 * Creates a binary trie out of binary trie nodes.
 */
const createBinaryTrie = (binaryArrNum) => null;

module.exports = {
  day3Puzzle1,
  day3Puzzle2,
  getContents,
  getMostCommonBits,
  binaryArrFlip,
  binaryArrToNum,
  getGammaAndEpsilon,
  BinaryTrieNode,
  createBinaryTrie,
};
