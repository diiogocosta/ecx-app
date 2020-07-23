import { api } from '../../services/api';
import { ActivateUser, CreateUserResponse } from '../../models/user';

const athleteService = () => {
  const activateUserAsAthlete = (
    userId: string,
    activateUser: ActivateUser,
  ) => {
    console.log({ userId, activateUser });
    return api
      .post(`athletes/${userId}/activation`, activateUser)
      .then((res) => res.data);
  };

  return { activateUserAsAthlete };
};

export default athleteService();
