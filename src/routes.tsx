import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Linking} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/main';
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';
import Onboarding from './pages/onboarding/onboarding';
import CreateAthlete from './pages/athlete/create-athlete';
import {appAuth} from './services/api';

const Auth = createStackNavigator();

const useAppInitialize = () => {
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const extractIdFromUrl = (url: string | any) => {
      return url ? url.match(/athletes\/([a-f\d-]+)\//)[1] : null;
    };
    const requestAppToken = async () => {
      await appAuth('ecx-app', '123');
      const initialUrl = (await Linking.getInitialURL()) as string;
      setUserId(extractIdFromUrl(initialUrl));
      Linking.addEventListener('url', (event) => {
        setLoading(true);
        setUserId(extractIdFromUrl(event.url));
        Linking.removeAllListeners('url');
        setLoading(false);
      });
      setLoading(false);
    };
    requestAppToken();
  }, []);

  return {userId, loading};
};

const Routes = () => {
  const {loading, userId} = useAppInitialize();
  const getDeepLinkRoute = () =>
    userId
      ? {
          primaryRoute: 'Onboarding',
          primaryComponent: Onboarding,
          secondaryRoute: 'Main',
          secondaryComponent: Main,
        }
      : {
          primaryRoute: 'Main',
          primaryComponent: Main,
          secondaryRoute: 'Onboarding',
          secondaryComponent: Onboarding,
        };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#FF3367"></ActivityIndicator>
      </View>
    );
  }

  const deepLinkRoute = getDeepLinkRoute();

  return (
    <NavigationContainer>
      <Auth.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#323337'},
        }}>
        <Auth.Screen
          name={deepLinkRoute.primaryRoute}
          component={deepLinkRoute.primaryComponent}
          initialParams={{userId}}
        />
        <Auth.Screen
          name={deepLinkRoute.secondaryRoute}
          component={deepLinkRoute.secondaryComponent}
        />
        <Auth.Screen name="Login" component={Login} />
        <Auth.Screen name="SignUp" component={SignUp} />
        <Auth.Screen name="CreateAthlete" component={CreateAthlete} />
      </Auth.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Routes;
