// Static imports
import * as webpack from "webpack";
// Dynamic imports
import common from "./common";

const config: webpack.Configuration = {
  ...common,
  mode: "production",
};

export default config;
