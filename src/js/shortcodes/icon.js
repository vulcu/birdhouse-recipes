const fs = require('fs');
const path = require('path');

/**
 * Display an icon.
 *
 * Find more at https://iconify.design/
 *
 * @param {string} icon filename in src/icons
 * @param {string} alt alt text, used in aria-label
 * @returns 
 */
module.exports = async function (icon, alt = '') {
  const file = path.resolve('src/icons', icon + '.svg');
  const svg = fs.readFileSync(file, 'utf8');
  return alt ? `<div class="icon" aria-label="${alt}">${svg}</div>` : `<div class="icon">${svg}</div>`;
};
