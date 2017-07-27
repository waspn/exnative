import React, {Component} from 'react'
import { View , Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { styles } from '../../style'

import NewsList from './NewsList'

class Login extends Component {
    render() {
      return(
        <View style={styles.container}>
          <Text style={styles.header}>News Feed</Text>
          <NewsList />
        </View> 
      )
    }

}

export default Login