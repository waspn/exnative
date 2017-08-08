import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { shallow } from 'enzyme'

import Home from '../Home'

describe('Test Home', () => {
  const wrapper = shallow(<Home />)
  it('should render correctly', () => {
    expect(wrapper.length).toEqual(1)
  })
  it('should redirect to login correctly', () => {
    wrapper.find('Button').at(0).simulate('Press')
    expect(Actions.login).toHaveBeenCalledTimes(1)
  })

  it('should redirect to feed correctly', () => {
    wrapper.find('Button').at(1).simulate('Press')
    expect(Actions.feed).toHaveBeenCalledTimes(1)
  })

  it('should redirect to about correctly', () => {
    wrapper.find('Button').at(2).simulate('Press')
    expect(Actions.about).toHaveBeenCalledTimes(1)
  })
})


