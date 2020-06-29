const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "jsnoz.js",
    path: path.resolve(__dirname, "dist"),
    library: "JSNOZJS",
    libraryTarget: "umd",
    globalObject: "this"
  },
  mode: "production",
  devtool: "source-map"
};

