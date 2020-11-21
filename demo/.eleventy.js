const lightboxPlugin = require("./lightbox.js");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addShortcode('lightbox', function (lightbox) {
        return lightboxPlugin(lightbox);
    });

    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        passthroughFileCopy: true
    }
};