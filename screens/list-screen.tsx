import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Styles from './../constants/styles'

export default function ListScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={Styles.headerTitleStyle}>List</Text>
      </View>

      <View>
        <Text style={Styles.headerTitleStyle}>Law no.01: Aesthetic Usability Effect</Text>
        <Text style={Styles.headerTitleStyle}>Law no.02: Doherty Threshold</Text>
        <Text style={Styles.headerTitleStyle}>Law no.03: Fitts’s Law</Text>
        <Text style={Styles.headerTitleStyle}>Law no.04: Hick’s Law</Text>
        <Text style={Styles.headerTitleStyle}>Law no.05: Jakob’s Law</Text>
        <Text style={Styles.headerTitleStyle}>Law no.06: Law of Common Region</Text>
        <Text style={Styles.headerTitleStyle}>Law no.07: Law of Prägnanz</Text>
        <Text style={Styles.headerTitleStyle}>Law no.08: Law of Proximity</Text>
        <Text style={Styles.headerTitleStyle}>Law no.09: Law of Similarity</Text>
        <Text style={Styles.headerTitleStyle}>Law no.10: Law of Uniform Connectedness</Text>
        <Text style={Styles.headerTitleStyle}>Law no.11: Miller’s Law</Text>
        <Text style={Styles.headerTitleStyle}>Law no.12: Occam’s Razor</Text>
        <Text style={Styles.headerTitleStyle}>Law no.13: Pareto Principle</Text>
        <Text style={Styles.headerTitleStyle}>Law no.14: Parkinson’s Law</Text>
        <Text style={Styles.headerTitleStyle}>Law no.15: Peak-End Rule</Text>
        <Text style={Styles.headerTitleStyle}>Law no.16: Postel’s Law</Text>
        <Text style={Styles.headerTitleStyle}>Law no.17: Serial Position Effect</Text>
        <Text style={Styles.headerTitleStyle}>Law no.18: Tesler’s Law</Text>
        <Text style={Styles.headerTitleStyle}>Law no.19: Von Restorff Effect</Text>
        <Text style={Styles.headerTitleStyle}>Law no.20: Zeigarnik Effect</Text>
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
  container: Styles.viewContainerStyle
})
