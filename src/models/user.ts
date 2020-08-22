export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  type?: string;
}

export interface ICreateUserResponse {
  id: string;
  email: string;
}

export interface IActivateUser {
  about: string;
  birthDate: string;
  box: {
    id: string;
  };
  weight: number;
  genre: string;
}
