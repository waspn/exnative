import React, {Component}  from 'react'
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'

import { styles } from '../../style'
import * as feedActions from '../../redux/feed/feedActions'

class NewsEdit extends Component {

    constructor(props) {
        super(props)
        const {content} = this.props
        this.state = {
            news: {
                newsid: content.newsid,
                topic: content.topic,
                description: content.description
            }
        }
        this.clear = this.clear.bind(this)
        this.editFeed = this.editFeed.bind(this)
    }

    clear() {
        this.setState({
            news: {
                topic: '',
                description: ''
            }
        })
    }

    editFeed() {
        console.log(this.state.news)
        this.props.feedActions.editFeed(this.state.news)
        
        Actions.pop()
    }
 
    render() {
        let {newsid, topic, description} = this.state.news
        return(
            <View style={styles.container}>
                <TextInput 
                    placeholder='Topic' 
                    autoFocus={true}
                    onChangeText={(topic) => this.setState({
                        news:{
                            newsid: this.state.news.newsid,   
                            topic,
                            description
                        }
                    })}
                    value={this.state.news.topic} />
                <TextInput 
                    multiline = {true}
                    numberOfLines = {4}
                    placeholder='Description'
                    onChangeText={(description) => this.setState({
                        news:{
                            newsid: this.state.news.newsid,
                            topic,
                            description
                        }
                    })}
                    value={this.state.news.description} />

                <View style={{flex:1,flexDirection:'row',alignItems:'flex-end', justifyContent:'space-around' }}>
                    <Button onPress={this.clear}  title="Clear" />
                    <Button onPress={this.editFeed} title="Edit" />
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

export default connect(null, mapDispatchToProps)(NewsEdit)