import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Styles from './../constants/styles'

export default function ListScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={Styles.headerTitleStyle}>List</Text>
      </View>

      <View>
        <Text
          style={styles.lawLinkStyles}
          onPress={() => props.navigation.navigate('LawOne')}
        >Law no.01: Aesthetic Usability Effect</Text>

        <Text
          style={styles.lawLinkStyles}
          onPress={() => props.navigation.navigate('LawTwo')}
        >Law no.02: Doherty Threshold</Text>

        <Text
          style={styles.lawLinkStyles}
          onPress={() => props.navigation.navigate('LawThree')}
        >Law no.03: Fitts’s Law</Text>

        <Text
          style={styles.lawLinkStyles}
          onPress={() => props.navigation.navigate('LawFour')}
        >Law no.04: Hick’s Law</Text>

        <Text
          style={styles.lawLinkStyles}
          onPress={() => props.navigation.navigate('LawFive')}
        >Law no.05: Jakob’s Law</Text>

        <Text
          style={styles.lawLinkStyles}
          onPress={() => props.navigation.navigate('LawSix')}
        >Law no.06: Law of Common Region</Text>

        <Text
          style={styles.lawLinkStyles}
          onPress={() => props.navigation.navigate('LawSeven')}
        >Law no.07: Law of Prägnanz</Text>

        <Text
          style={styles.lawLinkStyles}
          onPress={() => props.navigation.navigate('LawEight')}
        >Law no.08: Law of Proximity</Text>

        <Text
          style={styles.lawLinkStyles}
          onPress={() => props.navigation.navigate('LawNine')}
        >Law no.09: Law of Similarity</Text>

        <Text
          style={styles.lawLinkStyles}
          onPress={() => props.navigation.navigate('LawTen')}
        >Law no.10: Law of Uniform Connectedness</Text>

        <Text
          style={styles.lawLinkStyles}
          onPress={() => props.navigation.navigate('LawEleven')}
        >Law no.11: Miller’s Law</Text>

        <Text
          style={styles.lawLinkStyles}
          onPress={() => props.navigation.navigate('LawTwelve')}
        >Law no.12: Occam’s Razor</Text>

        <Text
          style={styles.lawLinkStyles}
          onPress={() => props.navigation.navigate('LawThirteen')}
        >Law no.13: Pareto Principle</Text>

        <Text
          style={styles.lawLinkStyles}
          onPress={() => props.navigation.navigate('LawFourteen')}
        >Law no.14: Parkinson’s Law</Text>

        <Text
          style={styles.lawLinkStyles}
          onPress={() => props.navigation.navigate('LawFifteen')}
        >Law no.15: Peak-End Rule</Text>

        <Text
          style={styles.lawLinkStyles}
          onPress={() => props.navigation.navigate('LawSixteen')}
        >Law no.16: Postel’s Law</Text>

        <Text
          style={styles.lawLinkStyles}
          onPress={() => props.navigation.navigate('LawSeventeen')}
        >Law no.17: Serial Position Effect</Text>

        <Text
          style={styles.lawLinkStyles}
          onPress={() => props.navigation.navigate('LawEighteen')}
        >Law no.18: Tesler’s Law</Text>

        <Text
          style={styles.lawLinkStyles}
          onPress={() => props.navigation.navigate('LawNineteen')}
        >Law no.19: Von Restorff Effect</Text>

        <Text
          style={styles.lawLinkStyles}
          onPress={() => props.navigation.navigate('LawTwenty')}
        >Law no.20: Zeigarnik Effect</Text>
      </View>
    </ScrollView>
  )
}

ListScreen.navigationOptions = {
  title: null,
  headerStyle: Styles.headerStyle,
  headerTitleStyle: Styles.headerTitleStyle
}

const styles = StyleSheet.create({
  container: Styles.viewContainerStyle,
  lawLinkStyles: {}
})
