import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import authStack from './Auth';
import Drawer from './drawer';
import Setting from '../components/Setting/index'


const AppModalStack = createStackNavigator(
  {
    App: Drawer,
    Promotion1: {
      screen: Setting,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)

const TabNavigator = createSwitchNavigator({
  Auth:authStack,
  Drawer:AppModalStack
});

  export default createAppContainer(TabNavigator);
