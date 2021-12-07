const {
  day3Puzzle1,
  day3Puzzle2,
  getContents,
  getMostCommonBits,
  binaryArrFlip,
  binaryArrToNum,
  getGammaAndEpsilon,
  createBinaryTrie,
} = require("./day-3");

describe("getContents", () => {
  test("is function", () => expect(typeof getContents).toEqual("function"));
  test("returns data in correct format", () =>
    getContents().then((contents) => {
      expect(contents[0]).toEqual([0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1]);
    }));
});

describe("day3Puzzle1", () => {
  test("is function", () => expect(typeof day3Puzzle1).toEqual("function"));
  test("returns test function input", () =>
    expect(
      day3Puzzle1([
        [0, 0, 1, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 1, 1, 0],
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [0, 1, 1, 1, 1],
        [0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 0, 0, 1],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 1, 0],
      ])
    ).resolves.toEqual(198));
  test("returns challenge answer input", () =>
    expect(day3Puzzle1()).resolves.toEqual(738234));
});

describe("day3puzzle2", () => {
  test.todo("is function");
});

describe("getMostCommonBits", () => {
  test("is function", () =>
    expect(typeof getMostCommonBits).toEqual("function"));
  test("returns most common for single binary num", () =>
    expect(getMostCommonBits([[1, 0, 1, 1, 1]])).toEqual([1, 0, 1, 1, 1]));
});

describe("binaryArrFlip", () => {
  test("returns flipped bits", () =>
    expect(binaryArrFlip([1, 0, 1])).toEqual([0, 1, 0]));
});

describe("binaryArrToNum", () => {
  test("returns num", () => expect(binaryArrToNum([1, 0, 1])).toEqual(5));
});

describe("getGammaAndEpsilon", () => {
  test("returns values", () =>
    expect(getGammaAndEpsilon([[1, 0, 1]])).toEqual({ epsilon: 2, gamma: 5 }));
});

describe("createBinaryTrie", () => {
  test("is function", () =>
    expect(typeof createBinaryTrie).toEqual("function"));
  test("when given empty array, returns null", () =>
    expect(createBinaryTrie([])).toEqual(null));
  test("when given single, single digit binary, creates single node", () =>
    expect(createBinaryTrie([[1]])).toEqual(null));
  test.todo("creates binary trie from 3 similar nodes");
  // TODO: add test-case example.
});
describe("BinaryTrieNode", () => {
  test.todo("is object");
  test.todo("default parent is null");
  test.todo("2 digit binary creates 2 nodes");
  test.todo("duplicate 2 digit binary does not create more nodes");
  test.todo("counter returns depth of 2 nodes");
  // TODO: will be more
});
