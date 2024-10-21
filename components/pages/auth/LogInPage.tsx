import React, { useMemo, useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native'
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../store/userSlice';
import { globalStyle } from '../../../styles/styles';
import { Button } from '~/components/ui/button';
import { Text as StyledText } from '~/components/ui/text';
import { useTheme } from '@react-navigation/native';

const LogInPage = ({onLoginEvent}: any) => {
  const { colors } = useTheme();
  const globalStyles: any = useMemo(() => globalStyle(colors), [colors]);
  const styles: any = useMemo(() => createStyles(colors), [colors]);

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    }
    const dispatch = useDispatch();

    const onLogin = () => {
      dispatch(updateUser({name: name, password: password}))
      onLoginEvent()
    }
  

  return (
    <View style={[styles.container, globalStyles.container]}>
            <View style={styles.textBox}>
        <Text style={globalStyles.h1}>TIDEPOOL SPORTS</Text>
        <Text style={globalStyles.subheader}>Team evaluation and draft platform</Text>
      </View>
      <View style={globalStyles.authContentBox}>
        {/* <Text style={[globalStyles.h2, styles.title]}>Log In</Text> */}
        <Text style={[globalStyles.p, styles.label]}>Name:</Text>
        <TextInput
          style={globalStyles.input}
          onChangeText={setName}
          value={name}
          placeholder="Enter your name"
        />
        <Text style={[globalStyles.p, styles.label]}>Password:</Text>
        <TextInput
          style={globalStyles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your name"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={toggleShowPassword}>
          <Text style={globalStyles.smallPrint}>{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
        <Pressable 
            style={[globalStyles.primaryButton, styles.loginButton]} 
            onPress={onLogin}>
              <Text style={globalStyles.primaryButtonText}>Login</Text>
        </Pressable>
        {/* <Button onPress={onLogin} variant='default' style={[styles.loginButton]}>
          <StyledText>Login</StyledText>
        </Button> */}
      </View>
    </View>
  )
}

const createStyles = (colors: any) => StyleSheet.create({
    container: {
      height: '100%',
      paddingTop: '50%',
      padding: 50,
    },
    textBox: {
      width: '100%',
      textAlign: 'center',
      marginBottom: '40%'
    },
    loginButton: {
      margin: 'auto'
    },
    title: {
      textAlign: 'center',
    },
    label: {
      marginBottom: 5,
      marginTop: 5,
    }
  });

export default LogInPage
