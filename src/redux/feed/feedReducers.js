import * as reducer from './feedReducerFunction'
export const initialState = {
	data: [],
	isFetching: false,
}

export const feedReducers = (state = initialState, action) => {
	switch(action.type) {
		// in synchronous - there is 'REQUEST' and only one case 'SUCCESS'
		// in aynschronous will be divided into 'FAILURE' and 'SUCCESS'
		case 'ADD_FEED_REQUEST' : return reducer.AddFeedRequest(state, action)
		case 'ADD_FEED_SUCCESS' : return reducer.AddFeedSuccess(state, action)
		case 'ADD_FEED_FAILURE' : return reducer.AddFeedFailure(state, action)
		
		case 'EDIT_FEED_REQUEST' : return reducer.EditFeedRequest(state, action)
		case 'EDIT_FEED_SUCCESS' : return reducer.EditFeedSuccess(state, action) 
		case 'EDIT_FEED_FAILURE' : return reducer.EditFeedFailure(state, action)

		case 'DELETE_FEED_REQUEST' : return reducer.DeleteFeedRequest(state, action)
		case 'DELETE_FEED_SUCCESS' : return reducer.DeleteFeedSuccess(state, action)
		case 'DELETE_FEED_FAILURE' : return reducer.DeleteFeedFailure(state, action)

		//reducers for fetching data from json
		case 'FETCH_FEED_REQUEST' : return reducer.FetchFeedRequest(state, action)
		case 'FETCH_FEED_SUCCESS' : return reducer.FetchFeedSuccess(state, action)
		case 'FETCH_FEED_FAILURE' : return reducer.FetchFeedFailure(state, action)

		default: return state
	}
}

export default feedReducers