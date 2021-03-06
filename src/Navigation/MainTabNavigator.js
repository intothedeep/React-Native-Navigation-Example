import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { TabBarIcon } from '../Components';
import { 
  HomeScreen, 
  LinksScreen, 
  MapScreen, 
  SettingsScreen, 
  MyInfoScreen 
} from '../Screens';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const MapStack = createStackNavigator(
  {
    Map: MapScreen,
  },
  {
    headerMode: 'none',
  }
);

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
    />
  ),
};

const PreSettingStack = createStackNavigator({
    Settings: SettingsScreen,
    MyInfoModal: MyInfoScreen,
  },
  {
    mode: 'modal',
    headerMode: 'float', // float 반짝, screen screen 올라옴
  }
);
const MyInfoStack = createStackNavigator({
  MyInfo: MyInfoScreen,
});
const SettingsStack = createStackNavigator({
    Settings: PreSettingStack,
    MyInfo: MyInfoScreen,
  },
  {
    headerMode: 'none',
    mode: 'card',

  }
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const MainTabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  MapStack,
  SettingsStack,
});

export default MainTabNavigator;