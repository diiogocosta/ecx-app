import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TimeLine from '../../pages/TimeLine/TimeLine';

const Private = createStackNavigator();

export const PrivateRoutes = () => (
  <Private.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: 'red'},
      cardStyle: {backgroundColor: '#323337'},
    }}>
    <Private.Screen name="TimeLine" component={TimeLine} />
  </Private.Navigator>
);
