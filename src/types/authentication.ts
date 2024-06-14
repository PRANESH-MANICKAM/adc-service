export interface Users {
  first_name: string;
  last_name: string | null;
  email: string | null;
  phone_number: string | null;
  address: string | null;
  age: string;
  gender: string;
  marital_status: boolean | null;
}

export interface RegisterPayload {
  first_name: string;
  last_name: string | null;
  email: string | null;
  phone_number: string | null;
  address: string | null;
  age: string;
  gender: string;
  marital_status: boolean | null;
  password: string;
}

export interface ConstructCredentialsPayload {
  phone_number: string;
  password: string;
}

export interface loginPayload {
  phone_number: string;
  password: string;
}

