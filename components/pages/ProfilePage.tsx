import React, { useMemo, useState } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Button, Pressable } from 'react-native'
import { useSelector } from 'react-redux';
import { globalStyle } from '../../styles/styles';
import { useTheme } from '@react-navigation/native';

const ProfilePage = ({onLogoutEvent}: any) => {
  const { colors } = useTheme();
  const globalStyles: any = useMemo(() => globalStyle(colors), [colors]);
  const user = useSelector<any>(state => state.user.user);

  const [name, setName] = useState(user?.name);
  const [password, setPassword] = useState(user?.password);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const onLogout = () => {
    onLogoutEvent()
  }

  return (
    <View style={styles.container}>
      <View style={globalStyles.authContentBox}>
        <Text style={[globalStyles.h2, styles.title]}>Welcome, {user?.name}</Text>
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
      </View>
      <Pressable
            style={[globalStyles.primaryButton, styles.logoutButton]} 
            onPress={onLogout}>
              <Text style={globalStyles.primaryButtonText}>Logout</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  contentBox: {
    padding: 10
  },
  title: {
    textAlign: 'center',
  },
  label: {
    marginBottom: 5,
    marginTop: 5,
  },
  logoutButton: {
    margin: 'auto'
  }
});

export default ProfilePage
