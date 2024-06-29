const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "orionshub";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
      // use copy plugin to copy the .js/.css files from node_modules and provide these to other MFE applications
      new CopyPlugin({
        patterns: [
          {
            from: "./node_modules/bootstrap/dist/css/bootstrap.min.css",
            to: "./assets/bootstrap.min.css",
          },
          {
            from: "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
            to: "./assets/bootstrap.bundle.min.js",
          },
          {
            from: "./node_modules/react/umd/react.production.min.js",
            to: "./assets/react.production.min.js"
          },
          {
            from: "./node_modules/react-dom/umd/react-dom.production.min.js",
            to: "./assets/react-dom.production.min.js"
          },
          {
            from: "./src/style.css",
            to: "./assets/style.css"
          }
        ]
      })
    ],
  });
};
