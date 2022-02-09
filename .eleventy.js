module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img")
  eleventyConfig.addPassthroughCopy("fonts")
  eleventyConfig.addPassthroughCopy("js")
  eleventyConfig.addPassthroughCopy("uploads")
  eleventyConfig.addPassthroughCopy("admin")
};
