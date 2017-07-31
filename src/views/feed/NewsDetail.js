import React, {Component} from 'react'
import { View, Text, Modal, Button } from 'react-native'
import { styles } from '../../style'

class NewsDetail extends Component {


  render() {
    let {detail} = this.props
    return(
        <View style={styles.container}>
          <Text style={styles.topic}> {detail.topic} </Text>
          <Text style={styles.description}> {detail.description} </Text>
          <Button onPress={()=>alert('Edit')} style={styles.button} title="Edit" />
          <Button onPress={()=>alert('Delete')} style={styles.button} title="Delete" />
        </View>
    )
  }
}

export default NewsDetail
