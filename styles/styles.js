import { StyleSheet } from 'react-native';
// @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');

export const globalVariables = {
    primaryColor: '#314CB6',
    secondaryColor: '#2E4057',
    tertiaryColor: '#85c7f2',
    neutralColor: '#D1D1D1',
    secondaryNeutralColor: '#DBDBDB',
    darkColor: '#02071f',
    greenColor: 'green',
    redColor: 'red',
    accentFontFamily: 'Orbitron Bold',
}

export const globalStyle = (colors) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background
    },
    h1: {
      fontFamily: globalVariables.accentFontFamily,
      fontSize: 40,
      textAlign: 'center',
      color: colors.text
    },
    h2: {
      fontFamily: globalVariables.accentFontFamily,
      fontWeight: 'bold',
      color: 'black',
      textTransform: 'uppercase',
      fontSize: 14,
      color: colors.text
    },
    h3: {
      fontSize: 17,
      color: colors.text
    },
    subheader: {
      fontSize: 12,
      textAlign: 'center',
      color: colors.text
    },
    largePrint: {
      fontSize: 16,
      color: colors.text
    },
    p: {
      fontSize: 14,
      color: colors.text
    },
    smallPrint: {
      fontSize: 10,
      color: colors.text
    },
    primaryButton: {
      backgroundColor: colors.primaryButtonBackgroundColor,
      borderRadius: 15,
      alignSelf: "flex-start",
      paddingVertical: 8,
      paddingHorizontal: 20,
      marginVertical: 5
    },
    primaryButtonText: {
      fontFamily: globalVariables.accentFontFamily,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 14
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
    },
    circleButton: {
      width: 40,
      height: 40,
      borderRadius: 25,
      backgroundColor: 'transparent', // Light blue background
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 5, // Space between circles
      borderWidth: 2,
      marginRight: 10,
      borderColor: globalVariables.secondaryColor
    },
    authContentBox: {
      paddingHorizontal: 10,
      paddingVertical: 20
    },
});}