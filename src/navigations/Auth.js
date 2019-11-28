import { createStackNavigator } from 'react-navigation-stack';
import { Colors } from '../theme';
import { Login, Welcome } from '../screens';

const stack = createStackNavigator({
  login: Login,
  welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null,
    },
  },
  //   register: Register,
}, {
  initialRouteName: 'welcome',
  defaultNavigationOptions: {
    headerBackTitle: null,
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: Colors.black,
    },
    headerTintColor: Colors.white,
  },
});

export default stack;
