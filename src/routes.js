import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Main from './pages/main';
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';

const mainNavigation = createSwitchNavigator({
  Main,
  Login,
  SignUp,
});

export default createAppContainer(mainNavigation);
