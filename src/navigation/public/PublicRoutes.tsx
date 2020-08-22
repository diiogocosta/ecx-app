import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../../pages/Onboarding/Onboarding';
import Landing from '../../pages/Landing/Landing';
import ActivateAthlete from '../../pages/ActivateAthlete/ActivateAthlete';
import Login from '../../pages/Login/Login';
import SignUp from '../../pages/SignUp/SignUp';

const Public = createStackNavigator();

export const PublicRoutes = ({deepLinkUserId}: {deepLinkUserId: string}) => (
  <Public.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#323337'},
    }}>
    <Public.Screen
      name={deepLinkUserId ? 'Onboarding' : 'Landing'}
      component={deepLinkUserId ? Onboarding : Landing}
    />
    <Public.Screen
      name={deepLinkUserId ? 'Landing' : 'Onboarding'}
      component={deepLinkUserId ? Landing : Onboarding}
    />
    <Public.Screen name="ActivateAthlete" component={ActivateAthlete} />
    <Public.Screen name="Login" component={Login} />
    <Public.Screen name="SignUp" component={SignUp} />
  </Public.Navigator>
);
