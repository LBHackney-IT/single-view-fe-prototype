const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const {
  ImportMapWebpackPlugin,
} = require("@hackney/webpack-import-map-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "svv2-ui",
    projectName: "demo",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // entry: {
    //     "svv2-ui-demo": defaultConfig.entry,
    //   },
    //   output: {
    //     filename: "[name].[contenthash].js",
    //   },

    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: "file-loader",
        },
        {
          test: /\.scss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
  });
};
