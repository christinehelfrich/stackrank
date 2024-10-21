import React, { useState } from 'react'
import HomePage from './HomePage';
import {NavigationContainer, DefaultTheme, DarkTheme,} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Text} from 'react-native';
import ProfilePage from './ProfilePage';
import { useSelector } from 'react-redux';
import LogInPage from './auth/LogInPage';
import SignInPage from './auth/SignUpPage';
import { EventsBasePage } from './EventsPage';
import { lightTheme, darkTheme } from '../../styles/themes'
import { useFonts } from "expo-font";

const Drawer = createDrawerNavigator();

const MainNavPage = () => {
  const user = useSelector<any>(state => state.user.user);
  const [isAuth, setIsAuth] = useState<boolean>(user != null)
  const scheme = 'dark'// useColorScheme(); // 'light' or 'dark'
  const theme = scheme === 'dark' ? darkTheme : lightTheme;
  const [fontsLoaded] = useFonts({
    "Orbitron Medium": require("../../assets/fonts/Orbitron Medium.ttf"),
    "Orbitron Bold": require("../../assets/fonts/Orbitron Bold.ttf"),
  });

  const onLogin = () => {
    setIsAuth(true)
  }

  const onLogout = () => {
    setIsAuth(false)
  }

  return (
    <NavigationContainer independent={true} theme={theme}>
      {fontsLoaded && (
      <>

    {!isAuth && ( 
      <>
        <LogInPage  onLoginEvent={onLogin} />

      </>
    )}
    {isAuth && (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
        name="Evaluations and Drafts" 
        component={EventsBasePage} 
        options={{headerShown: false}}
        />
    <Drawer.Screen 
        name="Profile">
          {(props: any) => <ProfilePage {...props} onLogoutEvent={onLogout} />}
        </Drawer.Screen>
    <Drawer.Screen
        name="Home Page"
        component={HomePage}
        options={{title: 'Home Page'}}
      />
    </Drawer.Navigator>
    )}
    </>)}
    {!fontsLoaded && (
      <>
          <Text>font loading...</Text>
          </>
        )}

    </NavigationContainer>
  )
}

export default MainNavPage
