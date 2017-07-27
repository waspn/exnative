import { combineReducers } from 'redux'
import feedReducers from './feed/feedReducers'


export default combineReducers({
    feed: feedReducers
})