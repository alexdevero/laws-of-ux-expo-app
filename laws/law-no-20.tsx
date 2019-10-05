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
          <Text style={styles.lawTertiaryHeadingStyles}>Law no.20:</Text>
        </View>

        <Text style={styles.lawPrimaryHeadingStyles}>Zeigarnik Effect</Text>

        <Text style={styles.lawSecondaryHeadingStyles}>Summary:</Text>

        <Text style={styles.lawTextStyles}>People remember uncompleted or interrupted tasks better than completed tasks.</Text>

        <Text style={styles.lawSecondaryHeadingStyles}>Key Takeaways:</Text>
        <Text style={styles.lawTextStyles}>- Use progress bars for complex tasks to visually indicate when a task is incomplete, and thus increase the likelyhood it will be completed.</Text>

        <Text style={styles.lawSecondaryHeadingStyles}>Origins:</Text>

        <Text style={styles.lawTextStyles}>Bluma Wulfovna Zeigarnik (1900 – 1988) was a Soviet psychologist and psychiatrist, a member of the Berlin School of experimental psychology and Vygotsky Circle. She discovered the Zeigarnik effect and contributed to the establishment of experimental psychopathology as a separate discipline in the Soviet Union in the post-World War II period. In the 1920s she conducted a study on memory, in which she compared memory in relation to incomplete and complete tasks. She had found that incomplete tasks are easier to remember than successful ones. This is now known as the Zeigarnik effect. She later began working at the Institute of Higher Nervous Activity which is where she would meet her next big influence Vygowski, and become a part of his circle of scientists. It was also there that Zeigarnik founded the Department of Psychology. During that time, Zeigarnik received the Lewin Memorial Award in 1983 for her psychological research.</Text>

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
