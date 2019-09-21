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
        <Text style={styles.headingStyle}>Laws<br />of<br />UX</Text>

        <Button title="Start learning" onPress={() => props.navigation.navigate('List')} />
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
  headingStyle: {
    fontSize: 52,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
