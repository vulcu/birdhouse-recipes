const yaml = require('js-yaml');
const responsiveImage = require('./src/js/shortcodes/responsive-images.js');
const icon = require('./src/js/shortcodes/icon.js');
const parseMiniMd = require('./src/js/filters/parse-mini-markdown.js');
const license = require('./src/js/shortcodes/license.js');
const photoAttribution = require('./src/js/shortcodes/photo-attribution.js');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/public': '/' });
  eleventyConfig.addPassthroughCopy({ 'src/icons': '/icons/' });
  eleventyConfig.addLayoutAlias('default', 'layout.njk');
  eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents));
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addFilter('md', parseMiniMd);
  eleventyConfig.addShortcode('image', responsiveImage);
  eleventyConfig.addShortcode('icon', icon);
  eleventyConfig.addShortcode('license', license);
  eleventyConfig.addShortcode('photoAttribution', photoAttribution);

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
