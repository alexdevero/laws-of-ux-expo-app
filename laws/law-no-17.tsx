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
          <Text style={styles.lawTertiaryHeadingStyles}>Law no.17:</Text>
        </View>

        <Text style={styles.lawPrimaryHeadingStyles}>Serial Position Effect</Text>

        <Text style={styles.lawSecondaryHeadingStyles}>Summary:</Text>

        <Text style={styles.lawTextStyles}>Users have a propensity to best remember the first and last items in a series.</Text>

        <Text style={styles.lawSecondaryHeadingStyles}>Key Takeaways:</Text>
        <Text style={styles.lawTextStyles}>- Placing the least important items in the middle of lists can be helpful because these items tend to be stored less frequently in long-term and working memory.</Text>
        <Text style={styles.lawTextStyles}>- Positioning key actions on the far left and right within elements such as navigation can increase memoriziation.</Text>

        <Text style={styles.lawSecondaryHeadingStyles}>Origins:</Text>

        <Text style={styles.lawTextStyles}>The serial position effect, a term coined by Herman Ebbinghaus, describes how the position of an item in a sequence affects recall accuracy. The two concepts involved, the primacy effect and the recency effect, explains how items presented at the beginning of a sequence and the end of a sequence are recalled with greater accuracy than items in the middle of a list. Manipulation of the serial position effect to create better user experiences is reflected in many popular designs by successful companies like Apple, Electronic Arts, and Nike.</Text>

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
