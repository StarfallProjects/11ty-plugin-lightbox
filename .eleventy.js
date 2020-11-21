const lightboxPlugin = require("./src/lightbox.js");

eleventyConfig.addShortcode('lightbox', function () {
    return lightboxPlugin();
});