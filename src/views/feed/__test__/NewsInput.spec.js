import React from 'react'
import { TouchableOpacity, StyleSheet, Alert }  from 'react-native'
import { Actions } from 'react-native-router-flux'
import { shallow } from 'enzyme'

import NewsInput from '../NewsItem'

const testState = {
	news: {
		newsid: 1,
		topic: 'a topic',
		desciption: 'a description'
	}
}

describe('Test NewsInput', () => {
	const wrapper = shallow(<NewsInput />)
	it('render correctly', () => {
		const received = wrapper.length
		expect(received).toEqual(1)
	})
})