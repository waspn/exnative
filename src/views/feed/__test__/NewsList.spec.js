import React, { Component } from 'react'
import { View, ListView } from 'react-native'
import { shallow } from 'enzyme'

import NewsList from '../NewsList'

const testprop = {
  items: {
    data: [
      {
        newsid: 2,
        description: 'adaawg',
        topic: 'agaegag'
      }
    ],
    isFetching: false,
  },
  onRemove: jest.fn()
}


const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
const dataSource = ds.cloneWithRows(testprop.items.data)


describe('Test News List', () => {
  const wrapper = shallow(<NewsList {...testprop} />)
  it('should render correctly', () => {
    const received = wrapper.length
    expect(received).toEqual(1)
  })


  it('should render row correctly', () => {
    const received = wrapper.find('#listview').node.props.renderRow().type.name
    expect(received).toEqual('NewsItem')
  })

})
