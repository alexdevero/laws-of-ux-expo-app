import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import MainTabNavigator from './main-tab-navigator'

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

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    LawOne: LawOneScreen,
    // LawTwo: LawTwoScreen,
    // LawThree: LawThreeScreen,
    // LawFour: LawFourScreen,
    // LawFive: LawFiveScreen,
    // LawSix: LawSixScreen,
    // LawSeven: LawSevenScreen,
    // LawEight: LawEightScreen,
    // LawNine: LawNineScreen,
    // LawTen: LawTenScreen,
    // LawEleven: LawElevenScreen,
    // LawTwelve: LawTwelveScreen,
    // LawThirteen: LawThirteenScreen,
    // LawFourteen: LawFourteenScreen,
    // LawFifteen: LawFifteenScreen,
    // LawSixteen: LawSixteenScreen,
    // LawSeventeen: LawSeventeenScreen,
    // LawEighteen: LawEighteenScreen,
    // LawNineteen: LawNineteenScreen,
    // LawTwenty: LawTwentyScreen
  })
)
