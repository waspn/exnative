import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import Home from './views/home'
import Login from './views/login'
import Feed from './views/feed'
import About from './views/about'

const Routers = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" component={Home} title="Home" />
        <Scene key="login" component={Login} title="Login" />
        <Scene key="feed" component={Feed} title="Feed"/>
        <Scene key="about" component={About} title="About" />
      </Scene>
    </Router>
  )
}

export default Routers