const fs = require('fs').promises
const path = require('path');

// TODO: implement actual logic;
module.exports = async () => fs.readFile(path.join(__dirname, './puzzle-1-input.txt'), 'utf-8');
