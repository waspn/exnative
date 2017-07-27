export const addFeedRequest = () => ({
  type: 'ADD_FEED_REQUEST'
})
export const addFeedSuccess = (payload) => ({
  type: 'ADD_FEED_SUCCESS',
  payload
})
export const addFeedFailure = (error) => ({
  type: 'ADD_FEED_FAILURE',
  error
})
export const addFeed = (payload) => (dispatch, getState) => {
  dispatch(addFeedRequest())
  const url = 'http://localhost:3001/feed/create'
  console.log(payload)
  fetch(url,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then((res) => res.json())
    .then((res) => dispatch(addFeedSuccess(res.data)))
    .catch((error) => dispatch(addFeedFailure(error)))
}

export const editFeedRequest = () => ({
  type: 'EDIT_FEED_REQUEST',
})
export const editFeedSuccess = (payload) => ({
  type: 'EDIT_FEED_SUCCESS',
  payload
})
export const editFeedFailure = (error) => ({
  type: 'EDIT_FEED_FAILURE',
  error
})
export const editFeed = (payload) => (dispatch, getState) => {
  dispatch(editFeedRequest())
  const url = 'http://localhost:3001/feed/update'
  console.log(payload)
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then((res) => res.json())
    .then((res) => dispatch(editFeedSuccess(res.data)))
    .catch((error) => dispatch(editFeedFailure(error)))
}

export const deleteFeedRequest = () => ({
  type: 'DELETE_FEED_REQUEST',
})
export const deleteFeedSuccess = (key) => ({
  type: 'DELETE_FEED_SUCCESS',
  key
})
export const deleteFeedFailure = (error) => ({
  type: 'DELETE_FEED_FAILURE',
  error
})
export const deleteFeed = (key) => (dispatch, getState) => {
  dispatch(deleteFeedRequest())
  const url = 'http://localhost:3001/feed/delete'
  console.log(key)
  fetch(url,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      newsid: key
    })
  })
    .then((res) => res.json())
    .then((res) => dispatch(deleteFeedSuccess(res.data.newsid)))
    .catch((error) => dispatch(deleteFeedFailure(error)))
    
}

export const fetchFeedRequest = () => ({
    type: 'FETCH_FEED_REQUEST'
})
export const fetchFeedSuccess = (payload) => ({
    type: 'FETCH_FEED_SUCCESS',
    payload
})
export const fetchFeedFailure = (error) => ({
    type: 'FETCH_FEED_FAILURE',
    error
})
export const fetchFeed = () => (dispatch, getState) => { 
    dispatch(fetchFeedRequest())
    const url = 'http://localhost:3001/feed/data'
    fetch(url)
        .then((res) => res.json())
        .then((res) => dispatch(fetchFeedSuccess(res.data)))
        .catch((error) => dispatch(fetchFeedFailure(error)))
}
