var Plugins = {};
// Plugins globals
Plugins.if            = require("gulp-if");
Plugins.runSequence   = require("run-sequence");
Plugins.fs            = require("fs");
Plugins.util          = require("gulp-util");
Plugins.notifier      = require("node-notifier");
// Plugins gulp icons
Plugins.iconfont      = require("gulp-iconfont");
// Plugins gulp fonts
Plugins.consolidate   = require("gulp-consolidate");
// Plugins gulp styles
Plugins.autoprefixer  = require("autoprefixer");
Plugins.cssmqpacker   = require("css-mqpacker");
Plugins.postcss       = require("gulp-postcss");
Plugins.sass          = require("gulp-sass");
Plugins.urlVersion    = require("gulp-css-url-versioner");

module.exports = Plugins;
