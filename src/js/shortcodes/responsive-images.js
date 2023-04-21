const Image = require('@11ty/eleventy-img');

module.exports = async function (src, alt, sizes = "100vw") {
  let metadata = await Image(src, {
    widths: [300, 600, 800, null],
    formats: ['avif', 'jpeg'],
    outputDir: './dist/img/',
  });

  let lowsrc = metadata.jpeg[0];

  function prefixUrl(url) {
    let prefix = process.env.ELEVENTY_RUN_MODE === 'build'
      ? '/birdhouse-recipes'
      : '';
    return prefix + url;
  }

  return `<picture>
      ${Object.values(metadata).map(imageFormat => {
        return `<source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => prefixUrl(entry.srcset)).join(", ")}" sizes="${sizes}">`;
      }).join("\n")}
      <img src="${prefixUrl(lowsrc.url)}" alt="${alt}" loading="lazy" decoding="async">
    </picture>`;
}
