import Colors from './colors'

export default {
  headerStyle: {
    boxShadow: Colors.boxShadow
  },
  headerTitleStyle: {
    fontSize: 48,
    fontWeight: '700'
  },
  viewContainerStyle: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff'
  },
  lawStyles: {
    lawContainerStyles: {
      paddingBottom: 32,
    },
    lawPrimaryHeadingStyles: {
      fontSize: 48,
      fontWeight: '700'
    },
    lawSecondaryHeadingStyles: {
      marginTop: 21,
      marginBottom: 8,
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
      lineHeight: '166%'
    },
    lawBackLinkStyles: {
      marginTop: 21,
      fontSize: 15,
      textDecorationLine: 'underline',
      textTransform: 'uppercase'
    }
  }
}
