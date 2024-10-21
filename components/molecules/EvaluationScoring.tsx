import React, { useMemo } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { useTheme } from '@react-navigation/native'
import {globalStyle, globalVariables} from '../../styles/styles'
import MultiButtonSelectInput from '../atoms/inputTypes/MultiButtonSelectInput'
import MultiLineTextInput from '../atoms/inputTypes/MultiLineTextInput'


const EvaluationScoring = ({criteria, score, onScoreChangedEvent}: any) => {
    const { colors } = useTheme();
    const globalStyles: any = useMemo(() => globalStyle(colors), [colors]);
    const styles: any = useMemo(() => createStyles(colors), [colors]);

    const onScoreChanged = (score: any) => {
        onScoreChangedEvent(score)
    }

  return (

      <View>
        <Text style={[globalStyles.h2, styles.title]}>{criteria.Name}</Text>
        {criteria.EvaluationCategoryInputTypeId === 2 && (
          <MultiButtonSelectInput score={score} maxScore={criteria.ScoreMax} onScoreChanged={onScoreChanged}></MultiButtonSelectInput>
        )}
        {criteria.EvaluationCategoryInputTypeId === 4 && (
        <View style={styles.buttonsContainer}>
              <MultiLineTextInput score={score} onScoreChanged={onScoreChanged}></MultiLineTextInput>
        </View>
        )}
      </View>

  )
}

const createStyles = (colors: any) => StyleSheet.create({
    title: {
      margin: 'auto'
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
