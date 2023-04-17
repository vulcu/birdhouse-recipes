const Image = require('@11ty/eleventy-img');
const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/public': '/' });
  eleventyConfig.addLayoutAlias('default', 'layout.njk');

  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  eleventyConfig.addShortcode('image', async function (src, alt, sizes = "100vw") {
    let metadata = await Image(src, {
      widths: [300, 600, 800, null],
      formats: ['avif', 'jpeg'],
      outputDir: './dist/img/',
    });

		let lowsrc = metadata.jpeg[0];

		return `<picture>
  			${Object.values(metadata).map(imageFormat => {
  				return `<source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
  			}).join("\n")}
				<img src="${lowsrc.url}" alt="${alt}" loading="lazy" decoding="async">
			</picture>`;
  });

  return {
    dir: {
      input: 'pages',
      output: 'dist',
      includes: '../src',
      data: '../data',
    },
    pathPrefix:
      process.env.ELEVENTY_RUN_MODE === 'build'
        ? '/birdhouse-recipes/'
        : '/', // serve, watch
    markdownTemplateEngine: 'njk',
  };
};
