import { feedReducers, initialState } from '../feedReducers'
import * as feedActions from '../feedActions'
//import * as reducer from '../feedReducerFunction'

//initial state


//mock action
const FetchFeedRequest = (state, action) => {
  return {
    ...state,
    isFetching: true
  }
}
const FetchFeedSuccess = (state, action) => {
  return {
    ...state,
    data: action.payload,
    isFetching: false
  }
}
const FetchFeedFailure = (state, action) => {
  return {
    ...state,
    isFetching: false,
    fetchError: action.error
  }
}


const AddFeedRequest = (state, action) => {
  return {
    ...state,
    isAdding: true,
    addError: false
  }
}
const AddFeedSuccess = (state, action) => {
  return {
    ...state,
    data: [
        ...state.data,
        action.payload
    ],
    isAdding: false,
    addError: false
  }
}
const AddFeedFailure = (state, action) => {
  return {
    ...state,
    isAdding: false,
    addError: true
  }
}


const EditFeedRequest = (state, action) => {
  return {
    ...state,
    isEditing: true,
    editError: false
  }
}
const EditFeedSuccess = (state, action) => {
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
}
const EditFeedFailure = (state, action) => {
  return {
    ...state,
    isEditing: false,
    editError: true
  }
}


const DeleteFeedRequest = (state, action) => {
  return {
    ...state,
    isDeleting: true,
    deleteError: false
  }
}
const DeleteFeedSuccess = (state, action) => {
  return {
    ...state,
    data: state.data.filter((el) => {
        return el.newsid !== action.key
    }),
    isDeleting: false,
    deleteError: false
  }
}
const DeleteFeedFailure = (state, action) => {
  return {
    ...state,
    isDeleting: false,
    deleteError: true
  }
}
//

describe('Test FeedReducers', () => {

  it('Initial param', () => {
    const received = feedReducers(undefined,feedActions.fetchFeedRequest())
    //console.log(received)
  })
    
  it(`${feedActions.addFeedRequest().type}`, () => {
    const received = feedReducers(initialState, feedActions.addFeedRequest())
    const expected = AddFeedRequest(initialState, feedActions.addFeedRequest())
    expect(received).toEqual(expected)
  })
  it(`${feedActions.addFeedSuccess().type}`, () => {
    const received = feedReducers(initialState, feedActions.addFeedSuccess())
    const expected = AddFeedSuccess(initialState, feedActions.addFeedSuccess())
    expect(received).toEqual(expected)
  })
  it(`${feedActions.addFeedFailure().type}`, () => {
    const received = feedReducers(initialState, feedActions.addFeedFailure())
    const expected = AddFeedFailure(initialState, feedActions.addFeedRequest())
    expect(received).toEqual(expected)
  })


  it(`${feedActions.editFeedRequest().type}`, () => {
    const received = feedReducers(initialState, feedActions.editFeedRequest())
    const expected = EditFeedRequest(initialState, feedActions.editFeedRequest())
    expect(received).toEqual(expected)
  })
  it(`${feedActions.editFeedSuccess().type}`, () => {
    const received = feedReducers(initialState, feedActions.editFeedSuccess())
    const expected = EditFeedSuccess(initialState, feedActions.editFeedSuccess())
    expect(received).toEqual(expected)
  })
  it(`${feedActions.editFeedFailure().type}`, () => {
    const received = feedReducers(initialState, feedActions.editFeedFailure())
    const expected = EditFeedFailure(initialState, feedActions.editFeedRequest())
    expect(received).toEqual(expected)
  })


  it(`${feedActions.deleteFeedRequest().type}`, () => {
    const received = feedReducers(initialState, feedActions.deleteFeedRequest())
    const expected = DeleteFeedRequest(initialState, feedActions.deleteFeedRequest())
    expect(received).toEqual(expected)
  })
  it(`${feedActions.deleteFeedSuccess().type}`, () => {
    const received = feedReducers(initialState, feedActions.deleteFeedSuccess())
    const expected = DeleteFeedSuccess(initialState, feedActions.deleteFeedSuccess())
    expect(received).toEqual(expected)
  })
  it(`${feedActions.deleteFeedFailure().type}`, () => {
    const received = feedReducers(initialState, feedActions.deleteFeedFailure())
    const expected = DeleteFeedFailure(initialState, feedActions.deleteFeedRequest())
    expect(received).toEqual(expected)
  })


  it(`${feedActions.fetchFeedRequest().type}`, () => {
    const received = feedReducers(initialState, feedActions.fetchFeedRequest())
    const expected = FetchFeedRequest(initialState, feedActions.fetchFeedRequest())
    expect(received).toEqual(expected)
  })
  it(`${feedActions.fetchFeedSuccess().type}`, () => {
    const received = feedReducers(initialState, feedActions.fetchFeedSuccess())
    const expected = FetchFeedSuccess(initialState, feedActions.fetchFeedSuccess())
    expect(received).toEqual(expected)
  })
  it(`${feedActions.fetchFeedFailure().type}`, () => {
    const received = feedReducers(initialState, feedActions.fetchFeedFailure())
    const expected = FetchFeedFailure(initialState, feedActions.fetchFeedRequest())
    expect(received).toEqual(expected)
  })

  it('default action', () => {
    const received = feedReducers(initialState, 'undefined')
    const expected = initialState
    expect(received).toEqual(expected)
  })
  


})

