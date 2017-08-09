import React from 'react'
import { TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { mount, shallow } from 'enzyme'
import spyon from 'spyon'

import { Feed } from '../Feed'

//create mock store

const testprop = {
	feed: {
		data: [1,2,3],
		isFetching: false,
	},
	feedActions: {
		deleteFeed: jest.fn((key) => { }),
		fetchFeed: jest.fn(),
	}
}

const testpropNofeed = {
	feed: {
		data: [],
		isFetching: false,
	},
	feedActions: {
		deleteFeed: jest.fn((key) => { }),
		fetchFeed: jest.fn(),
	}
}

const testpropLoading = {
	feed: {
		data: [1,2,3],
		isFetching: true,
	},
	feedActions: {
		deleteFeed: jest.fn((key) => { }),
		fetchFeed: jest.fn(),
	}
}

const deleteNews = jest.fn(() => {
	testprop.feedActions.deleteFeed(key)
})

describe('Test NewsInput', () => {
	const wrapper = shallow(<Feed {...testprop} />)
	it('render correctly', () => {
		const received = wrapper.length
		expect(received).toEqual(1)
	})

	it('should fetch news feed', () => {
		expect(wrapper.find('NewsList').length).toEqual(1)
	})
	it('should error can be displayed', () => {
		const wrapper_nofeed = shallow(<Feed {...testpropNofeed} />)
		expect(wrapper_nofeed.find('#error').length).toEqual(1)
	})
	it('should show loading when fetching', () => {
		const wrapper_loading = shallow(<Feed {...testpropLoading} />)
		expect(wrapper_loading.find('#loading').length).toEqual(1)
	})
	it('should go to addNews when press', () => {
		const received = wrapper.find('Button').simulate('Press')
		expect(Actions.newsinput).toHaveBeenCalledTimes(1)
	})
	it('should deleteNews is working', () => {
		const inst = wrapper.renderer._instance
		const testKey = 1
		inst.props.feedActions.deleteFeed = spyon(inst.props.feedActions.deleteFeed)
		inst.deleteNews(testKey)
		const receieved = inst.props.feedActions.deleteFeed.getTimesCalled()
	})
	
	it('should do fetch feed when componentDidMount', () => {
		const inst = wrapper.renderer._instance
		inst.props.feedActions.fetchFeed = spyon(inst.props.feedActions.fetchFeed)
		inst.componentDidMount()
		const received = inst.props.feedActions.fetchFeed.getTimesCalled()
		expect(received).toEqual(1)
	})

})