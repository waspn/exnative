const initialState = {
	data: [],
	isFetching: false,
	error: false
}


const feedReducers = (state = initialState, action) => {
	switch(action.type) {
		// in synchronous - there is 'REQUEST' and only one case 'SUCCESS'
		// in aynschronous will be divided into 'FAILURE' and 'SUCCESS'
		case 'ADD_FEED_REQUEST' :
		return {
				...state,
				isAdding: true,
				addError: false
				// 'loading' or 'adding' when this stat is true
		}
		case 'ADD_FEED_SUCCESS' : 
		return {
				...state,
				data: [
						...state.data,
						action.payload
				],
				isAdding: false,
				addError: false
		}
		case 'ADD_FEED_FAILURE' :
		return {
			...state,
			isAdding: false,
			addError: true
		}

		case 'EDIT_FEED_REQUEST' :
		return {
			...state,
			isEditing: true,
			editError: false
		}
		case 'EDIT_FEED_SUCCESS' : 
		return {
			...state,
			data:
				state.data.map((item,newsid) => {
					if(item.newsid !== action.payload.newsid) {
						return{
								...item
						}
					}
					return{
						...item,
						...action.payload
					}
				}),
			isEditing: false,
			editError: false
		}
		case 'EDIT_FEED_FAILURE' :
		return {
			...state,
			isEditing: false,
			editError: true
		}

		case 'DELETE_FEED_REQUEST' :
		return {
			...state,
			isDeleting: true,
			deleteError: false
		}
		case 'DELETE_FEED_SUCCESS' :
		return {
			...state,
			data: state.data.filter((el) => {
					return el.newsid !== action.key
			}),
			isDeleting: false,
			deleteError: false
		}
		case 'DELETE_FEED_FAILURE' :
		return {
			...state,
			isDeleting: false,
			deleteError: true
		}


		//reducers for fetching data from json
		case 'FETCH_FEED_REQUEST' :
		return {
			...state,
			isFetching: true

		}
		case 'FETCH_FEED_SUCCESS' :
		return {
			...state,
			data: action.payload,
			isFetching: false
		}
		case 'FETCH_FEED_FAILURE' :
		return {
			...state,
			isFetching: false,
			fetchError: true

		}
		default: return state
	}
}

export default feedReducers