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
          <Text style={styles.lawTertiaryHeadingStyles}>Law no.15:</Text>
        </View>

        <Text style={styles.lawPrimaryHeadingStyles}>Peak-End Rule</Text>

        <Text style={styles.lawSecondaryHeadingStyles}>Summary:</Text>

        <Text style={styles.lawTextStyles}>People judge an experience largely based on how they felt at its peak and at its end, rather than the total sum or average of every moment of the experience.</Text>

        <Text style={styles.lawSecondaryHeadingStyles}>Key Takeaways:</Text>
        <Text style={styles.lawTextStyles}>- Pay close attention to the most intense points and the final moments (the “end”) of the user journey.</Text>
        <Text style={styles.lawTextStyles}>- Identify the moments when your product is most helpful, valuable, or entertaining and design to make those moments even better.</Text>
        <Text style={styles.lawTextStyles}>- Remember that people recall negative experiences more vividly than positive ones.</Text>

        <Text style={styles.lawSecondaryHeadingStyles}>Origins:</Text>

        <Text style={styles.lawTextStyles}>A 1993 study titled “When More Pain Is Preferred to Less: Adding a Better End” by Kahneman, Fredrickson, Charles Schreiber, and Donald Redelmeier provided groundbreaking evidence for the peak–end rule. Participants were subjected to two different versions of a single unpleasant experience. The first trial had subjects submerge a hand in 14°C water for 60 seconds. The second trial had subjects submerge the other hand in 14°C water for 60 seconds, but then keep their hand submerged for an additional 30 seconds, during which the temperature was raised to 15 °C. Subjects were then offered the option of which trial to repeat. Against the law of temporal monotonicity, subjects were more willing to repeat the second trial, despite a prolonged exposure to uncomfortable temperatures. Kahneman et al. concluded that “subjects chose the long trial simply because they liked the memory of it better than the alternative (or disliked it less)”.</Text>

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
