const UserConfig = require('@11ty/eleventy/src/UserConfig');

/** @param {UserConfig} eleventyConfig */
module.exports = (eleventyConfig) => {
  eleventyConfig.addGlobalData('pkg', require('./package.json'));

  eleventyConfig.setTemplateFormats(['njk', 'css']);

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
