import React from 'react'
import { TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { mount, shallow } from 'enzyme'

import { Feed } from '../Feed'

//create mock store

const feed = {
	data: [],
	isFetching: false,
}

const testPropToDispatch = {
	feedAction: {
		deleteFeed: jest.fn((key) => { }),
		fetchFeed: jest.fn(),
	}
}

describe('Test NewsInput', () => {
	// const wrapper = shallow(<Feed />)
	// it('render correctly', () => {
	// 	const received = wrapper.length
	// 	expect(received).toEqual(1)
	// })

	it('should map state to prop correctly', () => {

	})
	it('should dispatch to action correctly', () => {

	})
	it('should do fetch feed when loaded', () => {
		const wrapper = shallow(<Feed {...feed} />)
		console.log(wrapper)
	})

	// it('should go to newsinput when press button', () => {
	// 	const received = wrapper.find('button')
	// 	console.log(received)
	// })
})