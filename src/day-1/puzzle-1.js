const { readFile } = require("fs").promises;
const { join } = require("path");

// TODO: implement actual logic;
module.exports = async () => readFile(join(__dirname, './puzzle-1-input.txt'), "utf-8");
