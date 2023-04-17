const { globSync } = require('glob');

const files = globSync('./data/recipes/**/*.{jpg,jpeg,png,gif}');
let images = {};
if (files.length) {
  files.forEach((f) => {
    const filename = f.replaceAll('\\', '/');
    const parts = filename.split('/');
    const category = parts[2];
    const recipe = parts[parts.length - 1].replace(
      /^(.+?)(?:\-\d+)?\.[a-z]+$/i,
      '$1'
    );
    if (typeof images[category] === 'undefined') {
      images[category] = {};
    }
    if (typeof images[category][recipe] === 'undefined') {
      images[category][recipe] = [];
    }
    images[category][recipe].push(filename);
  });
}

module.exports = images;
