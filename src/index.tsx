import React from 'react';
import Routes from './routes';
import 'react-native-gesture-handler';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {NavigationContainer} from '@react-navigation/native';
import AuxContextProvider from './contexts/auth-ctx';

library.add(faCheckSquare, faCoffee, faFacebook, faFacebookF);

const App = () => (
  <NavigationContainer>
    <AuxContextProvider>
      <Routes />
    </AuxContextProvider>
  </NavigationContainer>
);

export default App;
