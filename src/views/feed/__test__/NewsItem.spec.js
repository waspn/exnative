import React from 'react'
import { TouchableOpacity, StyleSheet, Alert }  from 'react-native'
import { Actions } from 'react-native-router-flux'
import { shallow } from 'enzyme'
import NewsItem from '../NewsItem'

jest.mock('react-native', () => {
  const { Text, View, Button, TouchableOpacity, TouchableHighlight, Dimensions, StyleSheet } = require.requireActual('react-native')
  return { 
    Text, View, Button, TouchableOpacity, TouchableHighlight, Dimensions, StyleSheet,
    Alert: {
      alert: jest.fn((title, message, select) => {
        return select
      })
    }
  }
})

const testprop = {
  remove: jest.fn((key) => key),
  content:{
    newsid: 2,
    description: 'adaawg',
    topic: 'agaegag' 
  }
}

const select = [
  {text: 'Delete' },
  {text: 'Edit', onPress: Actions.newsedit()},
  {text: 'Cancel', style: 'cancel'}
]

const activatePopupMenu = (content) => {
  Alert.alert(
    'topic',
    'message',
    select
  )
}

describe('Test newsitem', () => {
  const wrapper = shallow(<NewsItem {...testprop} />)
  it('component rendered', () => {
    const received = wrapper.length
    expect(received).toEqual(1)
  })

  it('activate popup menu', () => {
    expect(Alert.alert).toHaveBeenCalledTimes(0)
    const received = wrapper.find('#touchable').simulate('LongPress')
    expect(Alert.alert).toHaveBeenCalledTimes(1)
  })
  
  it('should remove working', () => {
    let inst = wrapper.renderer._instance
    let recieved = inst.props.remove(inst.props.content.newsid)
    expect(recieved).toEqual(inst.props.content.newsid)
  })

  // unfinished
  /*it('should edit redirect correctly', () => {
    let inst = wrapper.renderer._instance
    inst.actionNewsedit = spyon(inst.actionNewsedit)
    
  })
  */
})