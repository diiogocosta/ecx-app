import {api, setAuthorizationHeader} from './api';
import {AppToken} from '../models/token';
import {AsyncStorage} from 'react-native';

export const authenticateUser = async (username: string, password: string) => {
  const data = new FormData();
  data.append('grant_type', 'password');
  data.append('username', username);
  data.append('password', password);

  const userToken = await getUserToken();

  if (userToken) {
    setAuthorizationHeader(userToken);
    return userToken;
  }

  return api
    .post<AppToken>('oauth/token', data, {
      auth: {
        username: 'ecx-app',
        password: '123',
      },
    })
    .then((response) => {
      AsyncStorage.setItem('ECXApp:Auth-user', response.data.access_token);
      setAuthorizationHeader(response.data.access_token);
      return response.data.access_token;
    });
};

export const logout = () => {
  AsyncStorage.removeItem('ECXApp:Auth-user');
  AsyncStorage.removeItem('ECXApp:Auth-app');
};

export const getUserToken = async () => {
  return await AsyncStorage.getItem('ECXApp:Auth-user');
};
