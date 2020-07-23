export interface User {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  type?: string;
}

export interface CreateUserResponse {
  id: string;
  email: string;
}

export interface ActivateUser {
  about: string;
  birthDate: string;
  box: {
    id: string;
  };
  weight: number;
}
