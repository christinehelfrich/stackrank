import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import LogInPage from './auth/LogInPage';
import { useSelector } from 'react-redux';


const HomePage = ({navigation}: any) => {
  const user = useSelector<any>(state => state.user.user);
  const [isAuth, setIsAuth] = useState<boolean>(user != null)

  const onLogin = () => {
    setIsAuth(true)
  }


  return (
    <View>

    {!isAuth && (
      <LogInPage onLoginEvent={onLogin}></LogInPage>
    )}
    {isAuth && (
      <>
          <Text>Home</Text>
      
      </>
    )}
  
    </View>
  )
}

export default HomePage
