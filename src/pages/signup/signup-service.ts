import { api } from '../../services/api';
import { User, ActivateUser, CreateUserResponse } from '../../models/user';

const signupService = () => {
  const signup = (user: User) => {
    return api
      .post<CreateUserResponse>('users', { ...user, type: 'ATHLETE' })
      .then((res) => res.data);
  };

  const createAthletes = (userId: string, activateUser: ActivateUser) => {
    return api.post(`athletes/${userId}`, activateUser).then((res) => res.data);
  };

  const tempGetUser = (email: string) => {
    return api
      .get('users', {
        params: {
          email,
        },
      })
      .then((res) => res.data);
  };

  return { signup, createAthletes, tempGetUser };
};

export default signupService();
