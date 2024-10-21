import { useTheme } from '@react-navigation/native';
import React, { useMemo } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { globalStyle } from '~/styles/styles';

const MultiLineTextInput = ({score, onScoreChanged}: any) => {
    const { colors } = useTheme();
    const globalStyles: any = useMemo(() => globalStyle(colors), [colors]);
    const styles: any = useMemo(() => createStyles(colors), [colors]);


  return (
    <TextInput
    multiline={true}
    onChangeText={onScoreChanged}
    value={score}
    style={[globalStyles.input, styles.input]}
    // style={{ height: 200, textAlignVertical: 'top' }} // Adjust height as needed
  />
  )
}

const createStyles = (colors: any) => StyleSheet.create({
    input: {
      width: '100%',
      color: 'white',
      overflow: 'scroll'
    },
  })

export default MultiLineTextInput
