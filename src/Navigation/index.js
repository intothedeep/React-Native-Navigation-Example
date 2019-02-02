import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import { LoginScreen } from '../Screens';

const LoginStack = createStackNavigator(
    {
        Login: LoginScreen,
    },
);

const MainSwitchNavigator = createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
        Login: LoginStack,
        Main: MainTabNavigator,
    }, 
    {
        initialRouteName: 'Login',
    }
);

export default createAppContainer(MainSwitchNavigator);