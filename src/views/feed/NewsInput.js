import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'

import { styles } from '../../style'
import * as feedActions from '../../redux/feed/feedActions'

export class NewsInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      news: {
        newsid: Date.now(),
      }
    }
    this.clear = this.clear.bind(this)
    this.addNewsFeed = this.addNewsFeed.bind(this)
    this.textChanged = this.textChanged.bind(this)
  }

  clear() {
    this.setState({
      news: {
        topic: '',
        description: ''
      }
    })
  }

  addNewsFeed() {
    //console.logthis.state.news)
    this.props.feedActions.addFeed(this.state.news)
    Actions.pop()
  }

  textChanged(text, type = topic) {
    if (type === 'description') {
      this.setState({
        news: {
          newsid: this.state.news.newsid,
          topic: text,
          description: this.state.news.description,
        }
      })
    }
    else {
      this.setState({
        news: {
          newsid: this.state.news.newsid,
          topic: text,
          description: this.state.news.description,
        }
      })
    }
  }

  render() {
    let { topic, description } = this.state.news
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Topic'
          autoFocus={true}
          onChangeText={this.textChanged(topic, 'topic')}
          value={this.state.news.topic} />
        <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder='Description'
          onChangeText={this.textChanged(description, 'descripion')}
          value={this.state.news.description} />

        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-around' }}>
          <Button onPress={this.clear} title="Clear" />
          <Button onPress={this.addNewsFeed} title="Add" />
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    feedActions: bindActionCreators(feedActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(NewsInput)