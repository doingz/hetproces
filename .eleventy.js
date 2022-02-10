module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img")
  eleventyConfig.addPassthroughCopy("fonts")
  eleventyConfig.addPassthroughCopy("js")
  eleventyConfig.addPassthroughCopy("uploads")
  eleventyConfig.addPassthroughCopy("admin")

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
  });

};
