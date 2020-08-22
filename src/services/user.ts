import {api} from './api';
import {IUser, IActivateUser, ICreateUserResponse} from '../models/user';

export const createUser = (user: IUser) => {
  return api
    .post<ICreateUserResponse>('users', {...user, type: 'ATHLETE'})
    .then((res) => res.data);
};

export const activateUser = (userId: string, activateUser: IActivateUser) => {
  return api.post(`athletes/${userId}`, activateUser).then((res) => res.data);
};
