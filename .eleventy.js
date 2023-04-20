const yaml = require('js-yaml');
const responsiveImage = require('./src/js/filters/responsive-images.js');
const parseMiniMd = require('./src/js/filters/parse-mini-markdown.js');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/public': '/' });
  eleventyConfig.addLayoutAlias('default', 'layout.njk');
  eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents));
  eleventyConfig.addFilter('md', parseMiniMd);
  eleventyConfig.addShortcode('image', responsiveImage);

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
