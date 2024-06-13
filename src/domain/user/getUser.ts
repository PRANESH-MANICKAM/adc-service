// Dynamic imports
import { Tables } from "../../types/tables";

export const getUser = async (phone_number: string) => {
  try {
    return await global.knex(Tables.users).select().where({ phone_number });
  } catch (error) {
    return error.message;
  }
};
