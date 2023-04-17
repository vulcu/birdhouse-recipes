const Image = require('@11ty/eleventy-img');
const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/public': '/' });
  eleventyConfig.addLayoutAlias('default', 'layout.njk');

  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  eleventyConfig.addShortcode('image', async function (src, alt, sizes = "100vw") {
    let metadata = await Image(src, {
      widths: [300, 600],
      formats: ['avif', 'jpeg'],
      outputDir: './dist/img/',
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: 'lazy',
      decoding: 'async',
    };

    return Image.generateHTML(metadata, imageAttributes);
  });

  return {
    dir: {
      input: 'pages',
      output: 'dist',
      includes: '../src',
      data: '../data',
    },
    markdownTemplateEngine: 'njk',
  };
};
