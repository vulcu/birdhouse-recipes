/* global require, module */
const fs = require('fs');

let icons = [];
fs.readdirSync('src/icons/').forEach(file => {
  if (file.slice(-4) === '.svg') {
    icons.push(file.slice(0, -4));
  }
});

module.exports = icons;
