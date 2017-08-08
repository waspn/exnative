import React from 'react'
import ReactDom from 'react-dom'
import { shallow } from 'enzyme'
import { Actions } from 'react-native-router-flux'

import About from '../About'
import { styles } from '../../../style'

describe('test ABOUT component' , () => {
  const wrapper = shallow(<About />)
  it('should render correctly', () => {
    expect(wrapper.length).toEqual(1)
  })

  it('should go to login when press login', () => {
    const received = wrapper.find('Button').at(0).simulate('Press')
    expect(Actions.login).toHaveBeenCalledTimes(1)
  })
  it('should pop when press pop', () => {
    const received = wrapper.find('Button').at(1).simulate('Press')
    expect(Actions.pop).toHaveBeenCalledTimes(1)
  })
})