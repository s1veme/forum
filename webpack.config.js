let path = require("path");

let conf = {
  entry: "./src/main.js",

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    static: __dirname + "/",
    devMiddleware: {
      publicPath: "/dist/",
    },
    compress: true,
    client: {
      overlay: true,
    },
    proxy: {
        '^/': {
            target: 'http://localhost:8000',
            secure: false
        },
    },
  },
};

module.exports = (env, argv) => {
  conf.devtool =
    argv.mode === "production"
      ? "hidden-source-map"
      : "eval-cheap-module-source-map";
  return conf;
};
