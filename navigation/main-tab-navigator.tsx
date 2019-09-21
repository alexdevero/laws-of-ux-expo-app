import React from 'react'
import { Platform, ImageBackground } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import TabBarIcon from '../components/tab-bar-icon'

import HomeScreen from '../screens/home-screen'
import ListScreen from '../screens/list-screen'
import AboutScreen from '../screens/about-screen'
import SettingsScreen from '../screens/settings-screen'

const HomeStack = createStackNavigator({
  Home: HomeScreen
}, {
  headerLayoutPreset: 'center',
  headerMode: 'none'
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  )
}

const ListStack = createStackNavigator({
  List: ListScreen
}, {
  headerLayoutPreset: 'center',
  headerMode: 'none'
})

ListStack.navigationOptions = {
  tabBarLabel: 'List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
    />
  )
}

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
}, {
  headerLayoutPreset: 'center',
  headerMode: 'none'
})

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-cog' : 'md-cog'}
    />
  )
}

const AboutStack = createStackNavigator({
  About: AboutScreen
}, {
  headerLayoutPreset: 'center',
  headerMode: 'none'
})

AboutStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
}

// ? Docs: https://reactnavigation.org/docs/en/bottom-tab-navigator.html
const BottomTabNavigatorConfig = {
  tabBarOptions: {
    style: {
      // backgroundColor: '#111',
      borderTopColor: '#eee'
    }
  }
}

export default createBottomTabNavigator({
  HomeStack,
  ListStack,
  SettingsStack,
  AboutStack
}, BottomTabNavigatorConfig)
