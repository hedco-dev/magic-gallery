import { handleActions } from "../utils"
import { ROOT_STATE } from "../store"
import galleryActionType from "../actions/galleryAction/galleryActionType"
const { GET_PHOTOS } = galleryActionType

// reducer for gallery actions
const reducers = {
  [GET_PHOTOS]: {
    PENDING: state => {
      return {
        ...state,
        loading : true,
        error   : undefined
      }
    },
    FULFILLED: (state, action) => {
      return {
        ...state,
        photos  : [...state.photos, ...action.payload],
        loading : false
      }
    },
    REJECTED: (state, action) => {
      return {
        ...state,
        error   : action.payload,
        loading : false
      }
    }
  }
}

export default handleActions(ROOT_STATE, reducers)
