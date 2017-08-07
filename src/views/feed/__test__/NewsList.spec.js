import React, {Component} from 'react'
import { View, ListView } from 'react-native'
import { shallow } from 'enzyme'
import spyon from 'spyon'

import NewsList from '../NewsList'

const testprop = {
  items: {
    data: [],
	  isFetching: false,
  },
  onRemove: jest.fn()
}

const testRender = (rowData, sectionID, rowID) => {
  return {
    key: rowID,
    content: rowData
  }
}

describe('Test News List', () => {
  const wrapper = shallow(<NewsList {...testprop} />)
  it('component rendered', () => {
    const received = wrapper.length
    expect(received).toEqual(1)
  })


  it('should render row correctly', () => {
    const inst = wrapper.renderer._instance
    
  })
})
