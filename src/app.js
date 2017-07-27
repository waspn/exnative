/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import Routers from './routes'

const App = () => {
  return(
     <Routers />
  )
}

AppRegistry.registerComponent('reactnative', () => App);
