import * as feedAction from '../feedActions'
import nock from 'nock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import fetch from 'isomorphic-fetch'
import FetchError from 'fetch-error'
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
      { "type": "ADD_FEED_REQUEST" },
      {
        "error": new FetchError(404, 'request to http://localhost:3001/feed/create failed, reason: 404'),
        "type": "ADD_FEED_FAILURE"
      }
    ]
    const store = mockStore(initialState)
    return store.dispatch(feedAction.addFeed(postData))
    .then(() => {
      const received = store.getActions()
      expect(received).toEqual(expected)
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
      { "type": "EDIT_FEED_REQUEST" },
      {
        "error": new FetchError(404, 'request to http://localhost:3001/feed/update failed, reason: 404'),
        "type": "EDIT_FEED_FAILURE"
      }
    ]
    const store = mockStore(initialState)
    return store.dispatch(feedAction.editFeed(postData))
    .then(() => {
      const received = store.getActions()
      expect(received).toEqual(expected)
    })
  })

  it('deletesuccess', () => {
    const received = fee
  })

/*  it('deleteFeed-success', () => {
    nock(routesfetch)
    .defaultReplyHeaders({
      'Content-Type': 'application/json'
    })
    .post('/delete', postData.newsid)
    .reply(200, JSON.stringify({
      data: { 
        newsid: postData.newsid 
      },
      code: 200,
      status: 'DELETE'
    }))

    const expected = [
      
    ]

    const store = mockStore(initialState)
    return store.dispatch(feedAction.deleteFeed(postData.newsid))
    .then(() => {
      const received = store.getActions()
      console.log(received[0].type)
      console.log(received[1].type)
      console.log(received[0])
      expect(received).toEqual(expected)
    })
  })
/*
  it('deleteFeed-failure', () => {
    nock(routesfetch)
    .defaultReplyHeaders({
      'Content-Type': 'application/json'
    })
    .post('/delete', postData)
    .replyWithError('404')

    const expected = [
      { "type": "DELETE_FEED_REQUEST" },
      {
        "error": new FetchError(404, 'request to http://localhost:3001/feed/delete failed, reason: 404'),
        "type": "DELETE_FEED_FAILURE"
      }
    ]
    const store = mockStore(initialState)
    return store.dispatch(feedAction.editFeed(postData))
    .then(() => {
      const received = store.getActions()
      expect(received).toEqual(expected)
    })
  })
*/


})
      

  /*it('success', () => {
    nock(routesfetch)
    .defaultReplyHeaders({
      'Content-Type': 'application/json'
    })
    .get()
    .reply(200, JSON.stringify({
      data: [
        {
          "newsid": 1,
          "topic": "Feed Data",
          "description": "Lorem ipsum vi calas opique"
        },
        {
          "newsid": 2,
          "topic": "Feed Dataaa",
          "description": "Um vi cLorem ipsiqu alas ope"
        },
        {
          "newsid": 3,
          "topic": "Ddt Faee aaa",
          "description": "Mpsiq vi Loas psifwa aagq ope"
        }
      ],
      code: 200,
      status: 'OK'
    }))*/