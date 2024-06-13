export interface User {
  id: number;
  first_name: string;
  last_name: string | null;
  email: string | null;
  phone_number: string;
  address: string | null;
  age: string;
  gender: string;
  marital_status: boolean;
}
