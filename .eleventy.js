module.exports = function(eleventyConfig) {
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    root: [
      '_includes',
      '.'
    ]
  });
  eleventyConfig.addLayoutAlias('main', 'layouts/main.html');
  return {
    dir: {
      input: "./src",
      output: "./build"
    }
  };
};
