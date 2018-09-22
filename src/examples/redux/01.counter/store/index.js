import { createStore, compose, applyMiddleware } from 'redux'
import reducers from './reducers'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger()
const midlewares = [thunk, logger]

export const initialState = {
  count: 0,
  lasUpdateAt: (new Date()).toLocaleString()
}

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...midlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
