module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img")
  eleventyConfig.addPassthroughCopy("fonts")
  eleventyConfig.addPassthroughCopy("js")
  eleventyConfig.addPassthroughCopy("uploads")


  eleventyConfig.addFilter('markdown', function(value) {
      let markdown = require('markdown-it')({
          html: false
      });
      return markdown.render(value);
  });

};
