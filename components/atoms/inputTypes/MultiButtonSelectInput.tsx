import { useTheme } from '@react-navigation/native';
import React, { useMemo } from 'react'
import { Pressable, StyleSheet, View, Text } from 'react-native'
import { globalStyle, globalVariables } from '~/styles/styles';

const MultiButtonSelectInput = ({score, maxScore, onScoreChanged}: any) => {
    const { colors } = useTheme();
    const globalStyles: any = useMemo(() => globalStyle(colors), [colors]);
    const styles: any = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.buttonsContainer}>
    {Array.from({ length: maxScore }, (_, index) => (
      <Pressable 
        key={index} 
        style={[globalStyles.circleButton, score === index + 1 ? styles.selectedButton : styles.unselectedButton ]} 
        onPress={() => onScoreChanged(index + 1)}>
          <Text style={[styles.numberText, score === index + 1 ? styles.selectedButton : styles.unselectedButton ]}>{index + 1}</Text>
      </Pressable>
    ))}
  </View>
  )
}

const createStyles = (colors: any) => StyleSheet.create({
    selectedButton: {
      backgroundColor: colors.scoreButtonSelectedBackgroundColor,
      borderColor: colors.scoreButtonSelectedBorderColor,
      color: colors.scoreButtonSelectedTextColor
    },
    unselectedButton: {
      backgroundColor: colors.scoreButtonDeselectedBackgroundColor,
      borderColor: colors.scoreButtonDeselectedBorderColor, // Black border
    },
    numberText: {
      fontSize: 15,
      fontWeight: 500,
      color: colors.text, // Black text color
      fontFamily: globalVariables.accentFontFamily
    },
    buttonsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
      marginBottom: 5,
    }
  })

export default MultiButtonSelectInput
