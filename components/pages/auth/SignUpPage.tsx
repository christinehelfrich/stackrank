import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const SignInPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Enter your name"
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your password"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={toggleShowPassword}>
          <Text style={styles.eyeButtonText}>{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Retype Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setRetypePassword}
          value={retypePassword}
          placeholder="Enter your password"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={toggleShowPassword}>
          <Text style={styles.eyeButtonText}>{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      height: '100%'
    },
    contentBox: {
      margin: 0,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: [{ translateX: -75 }, { translateY: -75 }],
      borderWidth: 1,
      borderColor: 'gray',
      borderStyle: 'solid', 
      borderRadius: 10,
      padding: 10
    },
    title: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'black',
    },
    label: {
      marginBottom: 5,
      marginTop: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
    },
    eyeButtonText: {
      fontSize: 12,
    },
  });

export default SignInPage
