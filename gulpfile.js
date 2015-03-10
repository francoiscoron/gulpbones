// Configuration
global.path = {
    server: "./",
    css: "./",
    scss: "sass/",
    img: "images/",
    js: "js/",
    refresh: ["*.html", "**/*.php", "js/*.js"]
}

// Browser support
global.browser_support = [
    "ie >= 9",
    "ie_mob >= 10",
    "ff >= 30",
    "chrome >= 34",
    "safari >= 7",
    "opera >= 23",
    "ios >= 7",
    "android >= 4.4",
    "bb >= 10"
]


// Require : load tasks
var requireDir = require('require-dir');
var dir = requireDir('./tasks');