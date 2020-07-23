import axios from 'axios';
import { AppToken } from '../models/token';
import { AsyncStorage } from 'react-native';

export const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const appAuth = async (client_id: string, client_secret: string) => {
  const data = new FormData();
  data.append('grant_type', 'client_credentials');

  const setAuthorizationHeader = (token: string) => {
    api.defaults.headers = {
      Authorization: `Bearer ${token}`,
    };
  };

  const appToken = await AsyncStorage.getItem('ECXApp:Auth');

  if (appToken) {
    setAuthorizationHeader(appToken);
    return appToken;
  }

  return api
    .post<AppToken>('oauth/token', data, {
      auth: {
        username: client_id,
        password: client_secret,
      },
    })
    .then((response) => {
      AsyncStorage.setItem('ECXApp:Auth', response.data.access_token);
      setAuthorizationHeader(response.data.access_token);
      return response.data.access_token;
    });
};
