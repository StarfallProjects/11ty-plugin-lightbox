const lightboxPlugin = require("./lightbox.js");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addShortcode('lightbox', function (imgPath, caption) {
        return lightboxPlugin(imgPath, caption);
    });

    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        passthroughFileCopy: true
    }
};