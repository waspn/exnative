import React, {Component} from 'react'
import { View , Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'

import { styles } from '../../style'
import * as feedActions from '../../redux/feed/feedActions'

import NewsList from './NewsList'

class Login extends Component {

    constructor(props) {
        super(props)
        this.deleteNews = this.deleteNews.bind(this)
        this.fetchFeed = this.fetchFeed.bind(this)
    }

    componentDidMount() {
        this.fetchFeed()
    }

    deleteNews(key) {
        this.props.feedActions.deleteFeed(key)
    }

    fetchFeed() {
        this.props.feedActions.fetchFeed()
    }

    render() {
      const {feed} = this.props
      return(
        <View style={styles.container}>

          <Text style={styles.header}>News Feed</Text>

          { feed.isFetchong ? <Text> Loading... </Text> : <Text></Text>}
          { !feed.data.length ? 
            <Text> ERROR : Cannot fetch newsfeed </Text> : 
            <NewsList items={feed} onRemove={this.deleteNews} /> 
          }

					<Button onPress={()=>Actions.newsinput()} title="Add New Feed + " />

        </View> 
      )
    }

}

const mapStateToProps = (state, ownProps) => {
  return {
    feed: state.feed
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    feedActions: bindActionCreators(feedActions, dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)