import React from 'react'
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Styles from './../constants/styles'

export default function HomeScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerInner}>
        <Text style={styles.headingStyles}>Laws<br />of<br />UX</Text>

        <View style={styles.buttonContainerStyles}>
          <Text style={styles.buttonStyles} onPress={() => props.navigation.navigate('List')}>Start learning</Text>
        </View>
      </View>
    </ScrollView>
  )
}

HomeScreen.navigationOptions = {
  title: null,
  headerStyle: Styles.headerStyle,
  headerTitleStyle: Styles.headerTitleStyle
}

const styles = StyleSheet.create({
  container: Styles.viewContainerStyle,
  containerInner: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 15,
    marginTop: '15vh',
    backgroundColor: '#fff'
  },
  headingStyles: {
    fontSize: 52,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonContainerStyles: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    width: '100%',
    maxWidth: 180,
    height: 45,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#fff',
    backgroundColor: '#000',
    borderRadius: 35
  }
})
