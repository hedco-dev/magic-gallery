import { createStore, applyMiddleware, compose } from 'redux'
import reduxImmutableStateInvarient from 'redux-immutable-state-invariant'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import reducers from '../reducers'

/**
 * Redux store configuration function
 * using thunk, promiseMiddleware as middlewares to deal with data
 * using routerMiddleware to manage route in Redux
 * @export
 * @param {any} initialState
 * @returns
 */
export const config = (initialState) => {
  return createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(
        thunk,
        promiseMiddleware(),
        reduxImmutableStateInvarient()
      )
    )
  )
}
