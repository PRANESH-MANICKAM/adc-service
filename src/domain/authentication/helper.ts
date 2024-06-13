// Static imports
import * as bcrypt from "bcrypt";
// Dynamic imports
import { Tables } from "../../types/tables";
import {
  ConstructCredentialsPayload,
  RegisterPayload,
} from "../../types/authentication";

export const hashPassword = (password: string): Promise<string> =>
  bcrypt.hash(password, 10);

export const constructCredentialsPayload = ({
  phone_number,
  password,
}: ConstructCredentialsPayload) => {
  return {
    phone_number,
    password,
  };
};

export const constructUserPayload = (body: RegisterPayload) => {
  return {
    first_name: body.first_name,
    last_name: body.last_name ?? null,
    email: body.email ?? null,
    phone_number: body.phone_number,
    address: body.address ?? null,
    age: body.age,
    gender: body.gender,
    marital_status: body.marital_status ?? null,
  };
};

export const makeRegistration = async (body: RegisterPayload) => {
  const { password, phone_number } = body;
  const hashedPassword = await hashPassword(password);
  const credentialsPayload = constructCredentialsPayload({
    phone_number,
    password: hashedPassword,
  });
  const userPayload = constructUserPayload(body);
  await global.knex(Tables.users).insert(userPayload);
  await global.knex(Tables.userCredentials).insert(credentialsPayload);
};
