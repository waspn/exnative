import React, {Component} from 'react'
import { View , Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { styles } from '../../style'

const About = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.header}>About REACT</Text>

      <Text style={styles.detail}>      Nam arcu dui, dignissim non enim at, blandit molestie erat. Cras hendrerit lacus et pellentesque mattis.</Text>
      <Text style={styles.detail}>Aenean libero odio, rutrum eu felis et, placerat dapibus enim. Donec laoreet. Cras hendrerit lacus et pellentesque mattis.</Text>

      <Button onPress={()=>Actions.login()} title="Login" />
      <Button onPress={()=>Actions.pop()} title="Back" />
    </View> 
  )
}

export default About