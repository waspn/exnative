import React from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import { shallow } from 'enzyme'
import { Actions } from 'react-native-router-flux'

import Login from '../Login'


describe('Test Login', () => {
  const wrapper = shallow(<Login />)
  //console.logwrapper)
  it('should render correctly', () => {
    expect(wrapper.length).toEqual(1)
  })

  it('should pop when press', () => {
    const received = wrapper.find('Button').simulate('Press')
    expect(Actions.pop).toHaveBeenCalledTimes(1) 
  })

})