import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Auth from './Auth';
import Main from './Main';
import { Loading } from '../screens';

const Nav = createSwitchNavigator({
  auth: Auth,
  main: Main,
  loading: Loading,
}, {
  initialRouteName: 'loading',
});

export default createAppContainer(Nav);
