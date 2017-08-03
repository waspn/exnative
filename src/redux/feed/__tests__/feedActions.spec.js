import * as feedAction from '../feedActions'
import nock from 'nock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import fetch from 'isomorphic-fetch'
import { initialState } from '../feedReducers'

//create mock store
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const routesfetch = 'http://localhost:3001/feed'
const postData = {
  newsid: 5,
  topic: 'TOPICNEWS',
  description: "DESCRIPTION"
}

describe('test action' , () => {
  it('deletesuccess', () => {
    const received = feedAction.deleteFeedSuccess(postData.newsid)
    const expected = {
      type: 'DELETE_FEED_SUCCESS',
      key: postData.newsid
    }
    expect(received).toEqual(expected)
  })
  it('deletefailed', () => {
    const err = 'Have Error'
    const received = feedAction.deleteFeedFailure(err)
    const expected = {
      type: 'DELETE_FEED_FAILURE',
      error: err
    }
    expect(received).toEqual(expected)
  })
  it('deleterequest', () => {
    const received = feedAction.deleteFeedRequest()
    const expected = {
      type: 'DELETE_FEED_REQUEST',
    }
    expect(received).toEqual(expected)
  })
})

describe('Test Asynchronous', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('addFeed-success', () => {
    nock(routesfetch)
    .defaultReplyHeaders({
      'Content-Type': 'application/json'
    })
    .post('/create',postData)
    .reply(200, JSON.stringify({
      data: postData,
      code: 200,
      status: 'ADDED'
    }))
    
    const expected = [
      { "type": "ADD_FEED_REQUEST" }, 
      { "payload": {
          "description": "DESCRIPTION", 
          "newsid": 5,
          "topic": "TOPICNEWS"
        }, 
        "type": "ADD_FEED_SUCCESS"
      }
    ]

    const store = mockStore(initialState)
    return store.dispatch(feedAction.addFeed(postData))
    .then(() => {
      const received = store.getActions()
      expect(received).toEqual(expected)
    })
  })

  it('addFeed-failure', () => {
    nock(routesfetch)
    .defaultReplyHeaders({
      'Content-Type': 'application/json'
    })
    .post('/create', postData)
    .replyWithError('404')

    const expected = [
      {
        "error": "request to http://localhost:3001/feed/create failed, reason: 404",
        "type": "ADD_FEED_FAILURE"
      }
    ]
    
    const store = mockStore(initialState)
    return store.dispatch(feedAction.addFeed(postData))
    .then(() => {
      let received = store.getActions()
      received = [{
        "type": received[1].type,
        "error": (received[1].error).message
      }]
      expect(received).toEqual(expected)
    })
  })


  it('deleteFeed-success', () => {
    nock(routesfetch)
    .defaultReplyHeaders({
      'Content-Type': 'application/json'
    })
    .post('/delete', { newsid: postData.newsid } )
    .reply(200, JSON.stringify({
      data: {
        newsid: postData.newsid
      },
      code: 200,
      status: 'DELETE'
    }))

    const expected = [
      { type: 'DELETE_FEED_REQUEST' },
      { type: 'DELETE_FEED_SUCCESS', key: 5 } 
    ]
    const store = mockStore(initialState)
    return store.dispatch(feedAction.deleteFeed(postData.newsid))
    .then(() => {
      const received = store.getActions()
      expect(received).toEqual(expected)
    }) 
  })

  it('deleteFeed-failure', () => {
    nock(routesfetch)
    .defaultReplyHeaders({
      'Content-Type': 'application/json'
    })
    .post('/delete', { newsid: postData.newsid })
    .replyWithError('404')

    const expected = [
      {
        "type": "DELETE_FEED_FAILURE",
        "error": "request to http://localhost:3001/feed/data failed, reason: 404"
      }
    ]

    const store = mockStore(initialState)
    return store.dispatch(feedAction.deleteFeed(postData.newsid))
    .then(() => {
      let received = store.getActions()
      received = [{
        "type": received[1].type,
        "error": (received[1].error).message
      }]
    })
  })


  it('editFeed-success', () => {
    nock(routesfetch)
    .defaultReplyHeaders({
      'Content-Type': 'application/json'
    })
    .post('/update', postData)
    .reply(200, {
      data: postData,
      code: 300,
      status: 'UPDATE'
    })

    const expected = [
      {"type": "EDIT_FEED_REQUEST"}, 
      {"payload": {
          "description": "DESCRIPTION", 
          "newsid": 5, 
          "topic": "TOPICNEWS"
        }, 
        "type": "EDIT_FEED_SUCCESS"
      }
    ]
    const store = mockStore(initialState)
    return store.dispatch(feedAction.editFeed(postData))
    .then(() => {
      const received = store.getActions()
      expect(received).toEqual(expected)
    })
  })

  it('editFeed-failure', () => {
    nock(routesfetch)
    .defaultReplyHeaders({
      'Content-Type': 'application/json'
    })
    .post('/update', postData)
    .replyWithError('404')

    const expected = [
      {
        "type": "EDIT_FEED_FAILURE",
        "error": "request to http://localhost:3001/feed/data failed, reason: 404"
      }
    ]

    const store = mockStore(initialState)
    return store.dispatch(feedAction.editFeed(postData))
    .then(() => {
      let received = store.getActions()
      received = [{
        "type": received[1].type,
        "error": (received[1].error).message
      }]
    })
  })


  it('fetchFeed-success', () => {
    nock(routesfetch)
    .get('/data')
    .reply(200, JSON.stringify({
      data: postData,
      code: 200,
      status: 'OK'
    }))

    const expected = [
      {"type": "FETCH_FEED_REQUEST"}, 
      {
        "payload": {
          "description": "DESCRIPTION", 
          "newsid": 5, "topic": "TOPICNEWS"
        }, 
      "type": "FETCH_FEED_SUCCESS"
    }]

    const store = mockStore(initialState)
    return store.dispatch(feedAction.fetchFeed())
    .then(() => {
      const received = store.getActions()
      expect(received).toEqual(expected)
    })
  })

  it('fetchFeed-failure', () => {
    nock(routesfetch)
    .get('/data')
    .replyWithError('404')

    const expected = [
      {
        "type": "FETCH_FEED_FAILURE",
        "error": "request to http://localhost:3001/feed/data failed, reason: 404"
      }
    ]

    const store = mockStore(initialState)
    return store.dispatch(feedAction.fetchFeed())
    .then(() => {
      let received = store.getActions()
      received = [{
        "type": received[1].type,
        "error": (received[1].error).message
      }]
      expect(received).toEqual(expected)
    })
  })
})