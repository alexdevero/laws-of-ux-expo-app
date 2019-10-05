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
          <Text style={styles.lawTertiaryHeadingStyles}>Law no.2:</Text>
        </View>

        <Text style={styles.lawPrimaryHeadingStyles}>Doherty Threshold</Text>

        <Text style={styles.lawSecondaryHeadingStyles}>Summary:</Text>

        <Text style={styles.lawTextStyles}>Productivity soars when a computer and its users interact at a pace (&lt;400ms) that ensures that neither has to wait on the other.</Text>

        <Text style={styles.lawSecondaryHeadingStyles}>Key Takeaways:</Text>
        <Text style={styles.lawTextStyles}>- Provide system feedback within 400ms in order to keep users’ attention and increase productivity.</Text>

        <Text style={styles.lawSecondaryHeadingStyles}>Origins:</Text>

        <Text style={styles.lawTextStyles}>In 1982 Walter J. Doherty and Ahrvind J. Thadani published, in the IBM Systems Journal, a research paper that set the requirement for computer response time to be 400 milliseconds, not 2,000 (2 seconds) which had been the previous standard. When a human being’s command was executed and returned an answer In under 400 milliseconds, it was deemed to exceed the Doherty threshold, and use of such applications were deemed to be "addicting" to users.</Text>

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
