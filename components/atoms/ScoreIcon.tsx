import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalVariables } from '../../styles/styles';
import { useTheme } from '@react-navigation/native';

const ScoreIcon = ({ score, textBeneath, width }: any) => {
  const { colors } = useTheme();
  console.log(score)
  const styles: any = useMemo(() => styling(width, colors), [colors]);

  return (
    <View style={styles.container}>
      <View style={styles.hollowCircle}>
        <View style={[styles.threeQuarterCircle, score === '-' && styles.dash, parseInt(score) >= 4 && styles.five, (parseInt(score) < 4 && parseInt(score) > 2) && styles.middle, (parseInt(score) <= 2) && styles.one]}>
          <Text style={styles.ratingNumber}>{score}</Text>
        </View>
      </View>
      <Text style={styles.ratingLabel}>{textBeneath}</Text>
    </View>
  );
};

export const styling = (width: number, colors: any) => StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    justifyContent: 'center',
    alignItems: 'center',
  },
  hollowCircle: {
    width: width,
    height: width,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 1,
  },
  threeQuarterCircle: {
    width: width,
    height: width - 5,
    borderRadius: 25,
    borderWidth: 3,
    borderBottomColor: 'transparent', // Bottom transparent to simulate cutout
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  dash: {
    borderColor: globalVariables.neutralColor,
    borderTopColor: globalVariables.neutralColor, // Top part of the border
    borderRightColor: globalVariables.neutralColor,// Right part of the border
    borderLeftColor: globalVariables.neutralColor,// Left part of the border
  },
  five: {
    borderColor: globalVariables.greenColor,
    borderTopColor: globalVariables.greenColor, // Top part of the border
    borderRightColor: globalVariables.greenColor,// Right part of the border
    borderLeftColor: globalVariables.greenColor,// Left part of the border
  },
  middle: {
    borderColor: globalVariables.yellowColor,
    borderTopColor: globalVariables.yellowColor, // Top part of the border
    borderRightColor: globalVariables.neutralColor,// Right part of the border
    borderLeftColor: globalVariables.yellowColor,// Left part of the border
  },
  one: {
    borderColor: globalVariables.redColor,
    borderTopColor: globalVariables.neutralColor, // Top part of the border
    borderRightColor: globalVariables.neutralColor,// Right part of the border
    borderLeftColor: globalVariables.redColor,// Left part of the border
  },
  ratingNumber: {
    fontFamily: globalVariables.accentFontFamily,
    fontSize: width / 2.5,
    fontWeight: 'bold',
    color: colors.scoreIconTextColor,
    zIndex: 1,
  },
  ratingLabel: {
    fontSize: width / 4,
    fontWeight: 'bold',
    color: colors.scoreIconTextColor,
  },
});

export default ScoreIcon;
