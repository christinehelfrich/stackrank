import { View, Text, StyleSheet } from 'react-native'
import React, { useMemo } from 'react'
import ScoreIcon from '../atoms/ScoreIcon'
import { globalStyle } from '~/styles/styles';
import { useTheme } from '@react-navigation/native';

const EvaluationHeaderTitle = ({name, score}: any) => {
    const { colors } = useTheme();
    const globalStyles: any = useMemo(() => globalStyle(colors), [colors]);

  return (
    <View style={styles.container}>
          <Text style={globalStyles.h3}>
            {name}
          </Text>
          <ScoreIcon score={score === 0 ? '-' : score} textBeneath={'OVERALL'} width={25}></ScoreIcon>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    }
})
export default EvaluationHeaderTitle
