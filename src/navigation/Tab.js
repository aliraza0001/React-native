import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../components/Home/index';
import Profile from '../components/Profile/index';
import Setting from '../components/Setting/index';
import Main from '../components/MainTab/index';
import users from '../components/users/index';
import Icon from '../components/Icon/index'
import TabBar from '../components/Tabbar/index'



const TabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="home" />
    }
  },
  UserScreen: {
    screen: users,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="user" />
    }
  },
  MainScreen: {
    screen: Main ,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="button" />
    }
  },
  ProfileScreen: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel:'none',
      tabBarIcon: ({ tintColor }) => <Icon name="bell" />
    }
  },
  optionScreen: {
    screen: Setting,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="options" color={tintColor} />
    }
  },
  

},{tabBarComponent:TabBar

});

  export default TabNavigator;
