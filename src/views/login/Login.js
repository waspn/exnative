import React, { Component } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { styles } from '../../style'

const Login = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.header}>Login to REACT</Text>
    
      <TextInput returnKeyType={'default'} style={styles.input} placeholder="Username" />
      <TextInput returnKeyType={'default'} style={styles.input} secureTextEntry={true} password={true} placeholder="Password" />
      <Button id='loginbtn' onPress={() => alert('Login')} title="Login"  />

      <Text style={styles.detail}>Forgot Password</Text>
      <Text style={styles.detail}>Sign Up</Text>
    </View> 
  )

}

export default Login