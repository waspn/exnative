import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { styles } from '../../style'

const Home = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to REACT NATIVE</Text>
      
      <Text>      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius erat nec cursus elementum. Nunc sagittis egestas nunc id convallis.</Text>
      
      <Button onPress={()=>Actions.login()} title="Login" />
      <Button onPress={()=>Actions.feed()} title="Feed" />
      <Button onPress={()=>Actions.about()} title="About" />
    </View> 
  )
}

export default Home