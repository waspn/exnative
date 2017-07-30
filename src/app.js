/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { connect, Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import Routers from './routes'
import rootReducer from './redux/rootReducers'

const middleWares = [thunk, logger]
const storeEnchanters = [
    applyMiddleware(...middleWares)
]
const finalCreateStore = compose(...storeEnchanters)(createStore)
const configureStore = (initialState) => {
    return finalCreateStore(rootReducer, initialState)
}

const App = () => {
  return(
    <Provider store={configureStore()} >
        <Routers />
    </Provider>
  )
}

AppRegistry.registerComponent('reactnative', () => App);
