import React, {Component} from 'react'
import { View, ListView } from 'react-native'
import { shallow } from 'enzyme'
import spyon from 'spyon'

import NewsList from '../NewsList'

jest.mock('react-native', () => {
  const { Text, View, Button, TouchableOpacity, TouchableHighlight, Dimensions, StyleSheet, ListView } = require.requireActual('react-native')
  return { 
    Text, View, Button, TouchableOpacity, TouchableHighlight, Dimensions, StyleSheet, 
    ListView : {
      DataSource: {
        rowHasChanged: jest.fn((r1,r2) => r1 !== r2 )
      }
    }
  }
})

const testprop = {
  items: {
    data: [],
	  isFetching: false,
  },
  onRemove: jest.fn()
}

const testcontent = {
    newsid: 2,
    description: 'adaawg',
    topic: 'agaegag'
}

describe('Test News List', () => {
  const wrapper = shallow(<NewsList {...testprop} />)
  it('component rendered', () => {
    const received = wrapper.length
    expect(received).toEqual(1)
  })


  it('should render row correctly', () => {
    const res = wrapper.find('ListView')
    console.log(res)
  })

})
