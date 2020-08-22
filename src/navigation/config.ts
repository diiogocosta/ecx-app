import {useState, useEffect} from 'react';
import {Linking} from 'react-native';
import {getUserToken} from '../services/auth';
import {appAuth} from '../services/api';

export const configBootstrapNavigation = () => {
  const [deepLinkUserId, setDeepLinkUserId] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);

  const extractIdFromUrl = (url: string | any) => {
    return url ? url.match(/athletes\/([a-f\d-]+)\//)[1] : null;
  };

  const getDeepLinkUserId = async () => {
    const initialUrl = (await Linking.getInitialURL()) as string;
    return extractIdFromUrl(initialUrl);
  };

  const listenDeepLinkFromRunningApp = () => {
    Linking.addEventListener('url', (event) => {
      setLoading(true);
      setDeepLinkUserId(extractIdFromUrl(event.url));
      Linking.removeAllListeners('url');
      setLoading(false);
    });
  };

  useEffect(() => {
    const didMount = async () => {
      await appAuth();
      const token = await getUserToken();

      if (token) {
        setToken(token);
        setLoading(false);
        return;
      }

      const userId = await getDeepLinkUserId();

      if (userId) {
        setDeepLinkUserId(userId);
        setLoading(false);
      }

      listenDeepLinkFromRunningApp();
      setLoading(false);
    };

    didMount();
  }, []);

  return {deepLinkUserId, token, loading};
};

export default configBootstrapNavigation;
