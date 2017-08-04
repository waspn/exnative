import React from 'react'
import { TouchableOpacity }  from 'react-native'
import { shallow } from 'enzyme'

import NewsItem from '../NewsItem'

const remove = (key) => {
  return key
}
const content = {
  id: 1,
  topic: 'aaa',
  description: '123456789'
}

describe('Test newsitem', () => {
  const wrapper = shallow(<NewsItem key='3' remove={remove} content={content} />)
  it('component rendered', () => {
    const received = wrapper.length
    expect(received).toEqual(1)
  })
})