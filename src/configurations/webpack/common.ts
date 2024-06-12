// Static imports
import path from "path";
import * as webpack from "webpack";
import nodeExternals from "webpack-node-externals";

const config: webpack.Configuration = {
  target: "node",
  devtool: "inline-source-map",
  externals: [nodeExternals()],
  entry: {
    main: "./src/index.ts",
  },
  output: {
    path: path.join(__dirname, "../../../dist"),
    publicPath: "/",
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
};

export default config;
