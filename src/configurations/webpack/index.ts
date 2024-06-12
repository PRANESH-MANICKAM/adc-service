// Static imports
import * as webpack from "webpack";
import * as dotenv from "dotenv-safe";
// Dynamic imports
import development from "./development";
import production from "./production";

dotenv.config();

let config: webpack.Configuration = development;
if (process.env.MODE === "production") {
  config = production;
}

export default config;
