const { readFile } = require("fs").promises;
const { join } = require("path");

/**
 * Challenge link:
 * https://adventofcode.com/2021/day/2
 */
const day2Puzzle1 = () => getContents().then(getFinalPos);

/**
 * Returns the raw contents of a file as an array
 * of an enum, with the first value being "forward", "up", "down"
 *
 * and the second being the amount as a number.
 */
const getContents = () =>
  readFile(join(__dirname, "./day-2-puzzle-1-input.txt"), "utf-8").then(
    (contents) =>
    // TODO: fix
      contents
        .split("\n")
        .map((line) =>
          line
            .split(" ")
            .map(([direction, amount]) => [direction, Number(amount)])
        )
  );

/**
 * Returns the final position calculated from the input
 * directions.
 * @params commands {[string, num]} an array of enums, where the first value
 * is the direction, and the second valud is the amount.
 */
const getFinalPos = (commands) => {
  const { horizontal, vertical } = commands.reduce(
    (acc, [command, amount]) => {
      if (command === "forward")
        return { ...acc, horizontal: (acc.horizontal += amount) };
      if (command === "down")
        return { ...acc, vertical: (acc.vertical -= amount) };
      if (command === "up")
        return { ...acc, vertical: (acc.vertical += amount) };
      // technically this is an error
      throw new Error("unknown command " + command);
      return acc;
    },
    {
      horizontal: 0,
      vertical: 0,
    }
  );
  console.log("test", { horizontal, vertical, commands: commands.length });
  return Math.abs(horizontal * vertical);
};

module.exports = {
  day2Puzzle1,
  getContents,
  getFinalPos,
};
