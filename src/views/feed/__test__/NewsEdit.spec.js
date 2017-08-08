import React from 'react'
import { TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { shallow } from 'enzyme'

import { NewsEdit } from '../NewsEdit'

const testState = {
  news: {
    newsid: 1,
    topic: 'a topic',
    desciption: 'a description'
  }
}
const testinput = {
  newsid: 3,
  topic: 'b topic',
  desciption: 'b description'
}
const textChanged = jest.fn((text, type) => {
  if (type == 'description') { }
  else { }
})

const testprop = {
  feedActions: {
    editFeed: jest.fn((payload) => (a, b) => {

    })
  }
}
const editNewsFeed = jest.fn(() => {
  testprop.feedActions.editFeed(news)
  Actions.pop()
})



describe('Test NewsInput', () => {
  const wrapper = shallow(<NewsEdit {...testprop} />)

  it('should render correctly', () => {
    const received = wrapper.length
    expect(received).toEqual(1)
  })
  /*
    it('should onChange Topic work', () => {
      textChanged.mockReset()
      const received = wrapper.at(0).simulate('ChangeText')
      textChanged(testinput.topic,'topic')
      expect(textChanged).toHaveBeenCalled()
    })
  
    it('should onChange Description work', () => {
      textChanged.mockReset()
      const received = wrapper.at(1).simulate('ChangeText')
      textChanged(testinput.description,'description')
      expect(textChanged).toHaveBeenCalledTimes(1)
    })
  
    it('should clear after press clear', () => {
      const received = wrapper.find('Button').at(0).simulate('Press')
      expect(received.node.props.onPress.name).toEqual('bound clear')		
    })
    it('should pop after press addFeed', () => {
      const received = wrapper.find('Button').at(1).simulate('Press')
      expect(received.node.props.onPress.name).toEqual('bound addNewsFeed')
    })
  */
})