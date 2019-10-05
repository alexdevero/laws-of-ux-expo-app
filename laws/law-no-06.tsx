import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Styles from './../constants/styles'

export default function LawOneScreen(props) {
  return (
    <ScrollView style={[Styles.viewContainerStyle, styles.lawContainerStyles]}>
      <View>
        <View style={styles.lawSecondaryHeadingContainerStyles}>
          <Text style={styles.lawTertiaryHeadingStyles}>Law no.6:</Text>
        </View>

        <Text style={styles.lawPrimaryHeadingStyles}>Law of Common Region</Text>

        <Text style={styles.lawSecondaryHeadingStyles}>Summary:</Text>

        <Text style={styles.lawTextStyles}>Elements tend to be perceived into groups if they are sharing an area with a clearly defined boundary.</Text>

        <Text style={styles.lawSecondaryHeadingStyles}>Key Takeaways:</Text>
        <Text style={styles.lawTextStyles}>- Adding borders (creating common regions) around an element or group of elements is an easy way to create separation from surrounding elements.</Text>

        <Text style={styles.lawSecondaryHeadingStyles}>Origins:</Text>

        <Text style={styles.lawTextStyles}>The principles of grouping (or Gestalt laws of grouping) are a set of principles in psychology, first proposed by Gestalt psychologists to account for the observation that humans naturally perceive objects as organized patterns and objects, a principle known as Prägnanz. Gestalt psychologists argued that these principles exist because the mind has an innate disposition to perceive patterns in the stimulus based on certain rules. These principles are organized into five categories: Proximity, Similarity, Continuity, Closure, and Connectedness.</Text>

        <View style={styles.lawBackLinkContainerStyles}>
          <Text accessibilityRole="button" style={styles.lawBackLinkStyles} onPress={() => props.navigation.navigate('List')}>&larr; Go back to list</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  lawContainerStyles: {
    paddingBottom: 32,
  },
  lawPrimaryHeadingStyles: {
    fontSize: 48,
    fontWeight: '700'
  },
  lawSecondaryHeadingContainerStyles: {
    marginTop: 21,
    marginBottom: 8
  },
  lawSecondaryHeadingStyles: {
    fontSize: 14,
    textTransform: 'uppercase'
  },
  lawTertiaryHeadingStyles: {
    fontSize: 28,
    fontWeight: '700'
  },
  lawTextStyles: {
    fontSize: 21,
    fontWeight: '500',
    lineHeight: 38
  },
  lawBackLinkContainerStyles: {
    marginTop: 21,
  },
  lawBackLinkStyles: {
    fontSize: 15,
    textDecorationLine: 'underline',
    textTransform: 'uppercase'
  }
})
