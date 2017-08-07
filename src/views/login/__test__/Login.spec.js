import React from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import { shallow } from 'enzyme'
import { Actions } from 'react-native-router-flux'
import spyon from 'spyon'

import Login from '../Login'

jest.mock('react-native', () => {
  const { View, Text, Button, TextInput, StyleSheet  } = require.requireActual('react-native')
  return { 
    View, Text, Button, TextInput, 
    StyleSheet: {
      create: jest.fn()
    }
  }
})



describe('Test Login', () => {
  const wrapper = shallow(<Login />)
  //console.logwrapper)
  it('Header should appear', () => {
    const received = wrapper.contains(<Text style={styles.header}>Login to REACT</Text>)
    expect(received).toEqual(true)
  })

  it('Test onpress', () => {
    const received = wrapper.find('button')
    Actions.pop()
    expect(Actions.pop).toHaveBeenCalled() 
  })

  it('Input validation', () => {
    const received = wrapper.contains([
      <TextInput returnKeyType={'default'} style={styles.input} placeholder="Username" />,
      <TextInput returnKeyType={'default'} style={styles.input} secureTextEntry={true} password={true} placeholder="Password" />
    ])
    //console.logreceived)
    expect(received).toEqual(true)
  })

})