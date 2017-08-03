export const FetchFeedRequest = (state, action) => {
  return {
    ...state,
    isFetching: true
  }
}
export const FetchFeedSuccess = (state, action) => {
  return {
    ...state,
    data: action.payload,
    isFetching: false
  }
}
export const FetchFeedFailure = (state, action) => {
  return {
    ...state,
    isFetching: false,
    fetchError: action.error
  }
}


export const AddFeedRequest = (state, action) => {
  return {
    ...state,
    isAdding: true,
    addError: false
  }
}
export const AddFeedSuccess = (state, action) => {
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
export const AddFeedFailure = (state, action) => {
  return {
    ...state,
    isAdding: false,
    addError: true
  }
}


export const EditFeedRequest = (state, action) => {
  return {
    ...state,
    isEditing: true,
    editError: false
  }
}
export const EditFeedSuccess = (state, action) => {
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
export const EditFeedFailure = (state, action) => {
  return {
    ...state,
    isEditing: false,
    editError: true
  }
}


export const DeleteFeedRequest = (state, action) => {
  return {
    ...state,
    isDeleting: true,
    deleteError: false
  }
}
export const DeleteFeedSuccess = (state, action) => {
  return {
    ...state,
    data: state.data.filter((el) => {
        return el.newsid !== action.key
    }),
    isDeleting: false,
    deleteError: false
  }
}
export const DeleteFeedFailure = (state, action) => {
  return {
    ...state,
    isDeleting: false,
    deleteError: true
  }
}