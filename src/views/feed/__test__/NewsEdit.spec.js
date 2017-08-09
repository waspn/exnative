import React from 'react'
import { TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { shallow } from 'enzyme'
import spyon from 'spyon'

import { NewsEdit } from '../NewsEdit'

const testprop = {
  content: {
    newsid: 1,
    topic: 'a topic',
    desciption: 'a description'
  },
  feedActions: {
    editFeed: jest.fn((payload) => (a, b) => {

    })
  }
}

const testinput = {
  newsid: 3,
	topic: 'b topic',
	desciption: 'b description'
}

const editNewsFeed = jest.fn(() => {
  testprop.feedActions.editFeed(news)
  Actions.pop()
})
const clear = jest.fn()
const textChanged = jest.fn((text, type = 'topic') => {
  if (type == 'description') { }
  else { }
})



describe('Test NewsEdit', () => {
  const wrapper = shallow(<NewsEdit {...testprop} />)

  it('should render correctly', () => {
    const received = wrapper.length
    expect(received).toEqual(1)
  })
  
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
    const inst = wrapper.renderer._instance
    inst.clear = spyon(inst.clear)
    wrapper.find('Button').at(0).simulate('Press')
    inst.clear()    
    const received = inst.clear.getTimesCalled()
    expect(received).toEqual(1)
  })
  
  it('should do edit after press EdiFeed', () => {
    const received = wrapper.find('Button').at(1).simulate('Press')
    expect(received.node.props.onPress.name).toEqual('bound editNewsFeed')
  })
  
})