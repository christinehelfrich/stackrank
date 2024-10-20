import React, { useMemo, useState } from 'react'
import { Modal, Pressable, Text, View, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import {globalStyle} from '../../styles/styles'

const EvaluationScoring = ({criteria, score, onScoreChangedEvent}: any) => {
    const { colors } = useTheme();
    const globalStyles: any = useMemo(() => globalStyle(colors), [colors]);
    const styles: any = useMemo(() => createStyles(colors), [colors]);

    const onScoreChanged = (score: number) => {
        onScoreChangedEvent(score)
    }

  return (

      <View>
        <Text style={[globalStyles.h2, styles.title]}>{criteria.Name}</Text>
        {criteria.EvaluationCategoryInputType === "Button" && (
        <View style={styles.buttonsContainer}>
          {Array.from({ length: criteria.ScoreMax }, (_, index) => (
            <Pressable 
              key={index} 
              style={[globalStyles.circleButton, score === index + 1 ? styles.selectedButton : styles.unselectedButton ]} 
              onPress={() => onScoreChanged(index + 1)}>
                <Text style={[styles.numberText, score === index + 1 ? styles.selectedButton : styles.unselectedButton ]}>{index + 1}</Text>
            </Pressable>
          ))}
        </View>
        )}
      </View>

  )
}

const createStyles = (colors: any) => StyleSheet.create({
    title: {
      margin: 'auto'
    },
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
    },
    buttonsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
      marginBottom: 5,
    }
  })

export default EvaluationScoring
