export enum Role {
  "DEVELOPER" = "Developer",
  "MANGER" = "Manager",
}

export type userDetailType = {
  "User Detail": {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    date_of_birth: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postal_code: number;
    role: Role;
    department: string;
    hire_date: string;
  };
};
