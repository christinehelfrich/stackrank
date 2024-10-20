import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { globalVariables } from './styles';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    text: 'black',
    primaryButtonBackgroundColor: globalVariables.primaryColor,
    // evanuations
    bannerBackgroundColor: globalVariables.neutralColor,
    scoreButtonSelectedBackgroundColor: globalVariables.primaryColor,
    scoreButtonSelectedBorderColor: globalVariables.primaryColor,
    scoreButtonSelectedTextColor: 'white',
    scoreButtonDeselectedBackgroundColor: 'transparent',
    scoreButtonDeselectedBorderColor: globalVariables.secondaryColor,
    // score icon
    scoreIconTextColor: globalVariables.secondaryColor,
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: globalVariables.darkColor,
    text: 'white',
    primaryButtonBackgroundColor: globalVariables.primaryColor,
    // evaluations
    bannerBackgroundColor: globalVariables.primaryColor,
    scoreButtonSelectedBackgroundColor: globalVariables.tertiaryColor,
    scoreButtonSelectedBorderColor: globalVariables.tertiaryColor,
    scoreButtonSelectedTextColor: globalVariables.darkColor,
    scoreButtonDeselectedBackgroundColor: 'transparent',
    scoreButtonDeselectedBorderColor: globalVariables.secondaryColor,
    // score icon
    scoreIconTextColor: 'white',

  },
};