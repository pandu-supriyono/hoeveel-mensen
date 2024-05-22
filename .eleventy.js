const UserConfig = require('@11ty/eleventy/src/UserConfig');

/** @param {UserConfig} eleventyConfig */
module.exports = (eleventyConfig) => {
  eleventyConfig.addGlobalData('pkg', require('./package.json'));

  eleventyConfig.setTemplateFormats(['njk', 'css']);

  eleventyConfig.addNunjucksFilter('stringifyJSON', JSON.stringify);

  return {
    dir: {
      input: 'src',
      layouts: 'layouts',
      includes: 'includes',
      data: 'data',
      output: 'dist',
    },
  };
};
