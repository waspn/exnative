import React, {Component} from 'react'
import { View , Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'

import { styles } from '../../style'
import * as feedActions from '../../redux/feed/feedActions'

import NewsList from './NewsList'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newsfeed: []
        }
        this.addNews = this.addNews.bind(this)
        this.editNews = this.editNews.bind(this)
        this.deleteNews = this.deleteNews.bind(this)
        this.fetchFeed = this.fetchFeed.bind(this)
    }

    componentDidMount() {
        this.fetchFeed()
    }

    addNews(feed) {
        this.props.feedActions.addFeed(feed)
    }

    editNews(feed) {
        this.props.feedActions.editFeed(feed)
    }

    deleteNews(key) {
        this.props.feedActions.deleteFeed(key)
    }

    fetchFeed() {
        this.props.feedActions.fetchFeed()
    }

    render() {
      const {feed} = this.props
      console.log(feed)
      return(
        <View style={styles.container}>
          <Text style={styles.header}>News Feed</Text>
          { feed.fetchError ? 
            <Text> ERROR : Cannot fetch newsfeed </Text> : 
            <NewsList items={feed.data}/> 
          }
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