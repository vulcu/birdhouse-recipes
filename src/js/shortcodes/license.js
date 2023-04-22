const EleventyFetch = require('@11ty/eleventy-fetch');
const licenses = 'https://spdx.org/licenses/';
const endpoint =
  'https://raw.githubusercontent.com/spdx/license-list-data/main/json/details/';

module.exports = async function (license) {
  if (!license) return '';

  try {
    let data = await EleventyFetch(endpoint + license + '.json', {
      duration: '*',
      type: 'json',
    });
    let url = licenses + license + '.html';
    return `<div class="license"><a href="${url}" target="_blank">${data.name}</a></div>`;
  }
  catch (e) {
    console.error('License not found:', license);
    console.error('See', licenses, 'for list.')
    return `<div class="license">${license}</div>`;
  }
};
