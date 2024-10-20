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
        <View style={[styles.threeQuarterCircle, score === '-' && styles.dash, score === '5' && styles.five, score === '4' && styles.four, score === '3' && styles.three, score === '2' && styles.two, score === '1' && styles.one]}>
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
    height: width,
    borderRadius: 25,
    borderWidth: 3,
    // borderColor: globalVariables.tertiaryColor,
    // borderTopColor: globalVariables.tertiaryColor,   // Top part of the border
    // borderRightColor: globalVariables.tertiaryColor, // Right part of the border
    borderBottomColor: 'transparent', // Bottom transparent to simulate cutout
    // borderLeftColor: globalVariables.tertiaryColor,  // Left part of the border
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  dash: {
    borderColor: globalVariables.tertiaryColor,
    borderTopColor: globalVariables.tertiaryColor, // Top part of the border
    borderRightColor: globalVariables.tertiaryColor,// Right part of the border
    borderLeftColor: globalVariables.tertiaryColor,// Left part of the border
  },
  five: {
    borderColor: globalVariables.greenColor,
    borderTopColor: globalVariables.greenColor, // Top part of the border
    borderRightColor: globalVariables.greenColor,// Right part of the border
    borderLeftColor: globalVariables.greenColor,// Left part of the border
  },
  four: {
    borderColor: globalVariables.tertiaryColor,
    borderTopColor: globalVariables.tertiaryColor, // Top part of the border
    borderRightColor: globalVariables.tertiaryColor,// Right part of the border
    borderLeftColor: globalVariables.tertiaryColor,// Left part of the border
  },
  three: {
    borderColor: globalVariables.tertiaryColor,
    borderTopColor: globalVariables.tertiaryColor, // Top part of the border
    borderRightColor: globalVariables.tertiaryColor,// Right part of the border
    borderLeftColor: globalVariables.tertiaryColor,// Left part of the border
  },
  two: {
    borderColor: globalVariables.tertiaryColor,
    borderTopColor: globalVariables.tertiaryColor, // Top part of the border
    borderRightColor: globalVariables.tertiaryColor,// Right part of the border
    borderLeftColor: globalVariables.tertiaryColor,// Left part of the border
  },
  one: {
    borderColor: globalVariables.redColor,
    borderTopColor: globalVariables.redColor, // Top part of the border
    borderRightColor: globalVariables.redColor,// Right part of the border
    borderLeftColor: globalVariables.redColor,// Left part of the border
  },
  ratingNumber: {
    fontSize: width / 2,
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
