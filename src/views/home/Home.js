import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { styles } from '../../style'

const Home = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to REACT NATIVE \0/</Text>
      
      <Text>xLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius erat nec cursus elementum. Nunc sagittis egestas nunc id convallis.</Text>
      
      <TouchableOpacity onPress={()=>Actions.login()} style={styles.btn}>
         <Text style={styles.btntext}>Login </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Actions.feed()} style={styles.btn}>
         <Text style={styles.btntext}>Feed </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Actions.about()} style={styles.btn}>
         <Text style={styles.btntext}>About </Text>
      </TouchableOpacity>
    </View> 
  )
}

export default Home