import React from 'react'
import { TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { mount, shallow } from 'enzyme'

import { Feed } from '../Feed'

//create mock store

const testState = {
	feed: {
		data: [1,2,3],
		isFetching: true,
	}
}

const testPropToDispatch = {
	feedAction: {
		deleteFeed: jest.fn((key) => { }),
		fetchFeed: jest.fn(),
	}
}

describe('Test NewsInput', () => {
	const wrapper = shallow(<Feed {...testState} />)
	it('render correctly', () => {
		const received = wrapper.length
		expect(received).toEqual(1)
	})

	it('should fetch news feed', () => {
		
	})
	it('should add news when press', () => {
		const received = wrapper.find('Button').simulate('Press')
		expect(Actions.newsinput).toHaveBeenCalledTimes(1)
	})
	it('should do fetch feed when loaded', () => {
	
		
	})

	// it('should go to newsinput when press button', () => {
	// 	const received = wrapper.find('button')
	// 	console.log(received)
	// })
})