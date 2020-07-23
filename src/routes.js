import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Main from './pages/main';
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';
import Onboarding from './pages/onboarding/onboarding';

const mainNavigation = createSwitchNavigator({
  Main,
  Onboarding,
  SignUp,
});

export default createAppContainer(mainNavigation);
