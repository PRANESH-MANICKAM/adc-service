// Static imports
import { knex, Knex } from "knex";
import * as dotEnv from "dotenv-safe";

dotEnv.config();

class GenericKnex {
  knex: Knex;
  constructor() {
    this.initKnex();
  }
  private initKnex = (): void => {
    const knexOptions = process.env.DATABASE;
    this.knex = knex({
      ...JSON.parse(knexOptions),
    });
  };

  public authenticate = (): void => {
    try {
      global.knex = this.knex;
    } catch (error) {
      process.exit(1);
    }
  };
}

const instance = new GenericKnex();

export default instance;
