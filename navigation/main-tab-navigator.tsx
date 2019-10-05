import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

// Import TapBarIcon Component
import TabBarIcon from '../components/tab-bar-icon'

// Import main screens
import HomeScreen from '../screens/home-screen'
import ListScreen from '../screens/list-screen'
import AboutScreen from '../screens/about-screen'
import SettingsScreen from '../screens/settings-screen'

// Import laws screens
import LawOneScreen from './../laws/law-no-01'
// import LawTwoScreen from './../laws/law-no-02'
// import LawThreeScreen from './../laws/law-no-03'
// import LawFourScreen from './../laws/law-no-04'
// import LawFiveScreen from './../laws/law-no-05'
// import LawSixScreen from './../laws/law-no-06'
// import LawSevenScreen from './../laws/law-no-07'
// import LawEightScreen from './../laws/law-no-08'
// import LawNineScreen from './../laws/law-no-09'
// import LawTenScreen from './../laws/law-no-10'
// import LawElevenScreen from './../laws/law-no-11'
// import LawTwelveScreen from './../laws/law-no-12'
// import LawThirteenScreen from './../laws/law-no-13'
// import LawFourteenScreen from './../laws/law-no-14'
// import LawFifteenScreen from './../laws/law-no-15'
// import LawSixteenScreen from './../laws/law-no-16'
// import LawSeventeenScreen from './../laws/law-no-17'
// import LawEighteenScreen from './../laws/law-no-18'
// import LawNineteenScreen from './../laws/law-no-19'
// import LawTwentyScreen from './../laws/law-no-20'

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
  List: { screen: ListScreen },
  // Add Laws list "sub pages"
  LawOne: { screen: LawOneScreen },
  // LawOne: { screen: LawOneScreen },
  // LawTwo: { screen: LawTwoScreen },
  // LawThree: { screen: LawThreeScreen },
  // LawFour: { screen: LawFourScreen },
  // LawFive: { screen: LawFiveScreen },
  // LawSix: { screen: LawSixScreen },
  // LawSeven: { screen: LawSevenScreen },
  // LawEight: { screen: LawEightScreen },
  // LawNine: { screen: LawNineScreen },
  // LawTen: { screen: LawTenScreen },
  // LawEleven: { screen: LawElevenScreen },
  // LawTwelve: { screen: LawTwelveScreen },
  // LawThirteen: { screen: LawThirteenScreen },
  // LawFourteen: { screen: LawFourteenScreen },
  // LawFifteen: { screen: LawFifteenScreen },
  // LawSixteen: { screen: LawSixteenScreen },
  // LawSeventeen: { screen: LawSeventeenScreen },
  // LawEighteen: { screen: LawEighteenScreen },
  // LawNineteen: { screen: LawNineteenScreen },
  // LawTwenty: { screen: LawTwentyScree }n
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
    activeTintColor: '#111',
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
