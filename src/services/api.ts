import axios from 'axios';
import {AppToken} from '../models/token';
import {AsyncStorage} from 'react-native';

export const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const setAuthorizationHeader = (token: string) => {
  api.defaults.headers = {
    Authorization: `Bearer ${token}`,
  };
};

export const appAuth = async () => {
  const data = new FormData();
  data.append('grant_type', 'client_credentials');

  const appToken = await AsyncStorage.getItem('ECXApp:Auth-app');

  if (appToken) {
    setAuthorizationHeader(appToken);
    return appToken;
  }

  return api
    .post<AppToken>('oauth/token', data, {
      auth: {
        username: 'ecx-app',
        password: '123',
      },
    })
    .then((response) => {
      AsyncStorage.setItem('ECXApp:Auth-app', response.data.access_token);
      setAuthorizationHeader(response.data.access_token);
      return response.data.access_token;
    });
};
