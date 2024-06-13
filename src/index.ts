// Static imports
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import * as dotEnv from "dotenv-safe";
// Dynamic imports
import Routes from "./routes";
import knex from "./configurations/knex/index";

dotEnv.config();
knex.authenticate();
const app = express();

const basePath = process.env.BASE_PATH as string;
const port = process.env.PORT as string;

app.use(cors());
app.use(bodyParser.json());
app.use(basePath, Routes());

app.listen(port, () => {
  console.log(`ADC service is running in the port: ${port}`);
});
