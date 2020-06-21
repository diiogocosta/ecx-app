import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Main from './pages/main';
import Login from './pages/login/login';

const mainNavigation = createSwitchNavigator({
  Main,
  Login,
});

export default createAppContainer(mainNavigation);
