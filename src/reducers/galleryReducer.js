import { handleActions } from "../utils"
import { ROOT_STATE } from "../store"
import galleryActionType from "../actions/galleryAction/galleryActionType"
const { GET_PHOTOS, RERENDER } = galleryActionType

// reducer for gallery actions
const reducers = {
  [GET_PHOTOS]: {
    // before the promise response the request
    PENDING: state => {
      return {
        ...state,
        loading : true,
        error   : undefined
      }
    },
    // call after resolving the promise
    FULFILLED: (state, action) => {
      return {
        ...state,
        photos  : [...state.photos, ...action.payload],
        loading : false
      }
    },
    // call after catching the promise
    REJECTED: (state, action) => {
      return {
        ...state,
        error   : action.payload,
        loading : false
      }
    }
  },
  [RERENDER]: state => {
    return {
      ...state
    }
  }
}

export default handleActions(ROOT_STATE, reducers)
