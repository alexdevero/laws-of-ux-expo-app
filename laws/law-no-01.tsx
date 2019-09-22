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
    <ScrollView style={[Styles.viewContainerStyle, Styles.lawStyles.lawContainerStyles]}>
      <View>
        <View style={Styles.lawStyles.lawSecondaryHeadingContainerStyles}>
          <Text style={Styles.lawStyles.lawTertiaryHeadingStyles}>Law no.1:</Text>
        </View>

        <Text style={Styles.lawStyles.lawPrimaryHeadingStyles}>Aesthetic Usability Effect</Text>

        <Text style={Styles.lawStyles.lawSecondaryHeadingStyles}>Summary:</Text>

        <Text style={Styles.lawStyles.lawTextStyles}>Users often perceive aesthetically pleasing design as design that’s more usable.</Text>

        <Text style={Styles.lawStyles.lawSecondaryHeadingStyles}>Key Takeaways:</Text>
        <Text style={Styles.lawStyles.lawTextStyles}>- Aesthetically pleasing design can make users more tolerant of minor usability issues.</Text>
        <Text style={Styles.lawStyles.lawTextStyles}>- Aesthetically pleasing design can mask usability problems and prevent issues from being discovered during usability testing.</Text>

        <Text style={Styles.lawStyles.lawSecondaryHeadingStyles}>Origins:</Text>

        <Text style={Styles.lawStyles.lawTextStyles}>The aesthetic-usability effect was first studied in the field of human–computer interaction in 1995. Researchers Masaaki Kurosu and Kaori Kashimura from the Hitachi Design Center tested 26 variations of an ATM UI, asking the 252 study participants to rate each design on ease of use, as well as aesthetic appeal. They found a stronger correlation between the participants’ ratings of aesthetic appeal and perceived ease of use than the correlation between their ratings of aesthetic appeal and actual ease of use. Kurosu and Kashimura concluded that users are strongly influenced by the aesthetics of any given interface, even when they try to evaluate the underlying functionality of the system.</Text>

        <View style={Styles.lawStyles.lawBackLinkContainerStyles}>
          <Text style={Styles.lawStyles.lawBackLinkStyles} onPress={() => props.navigation.navigate('List')}>&larr; Go back to list</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})
