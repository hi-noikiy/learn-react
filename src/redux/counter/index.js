import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import  './index.css'

const logger = createLogger()
const initialState = 0


const Counter = ({value, onIncrement, onDecrement}) => (
  <div className="Counter">
    <h1 className="value">{value}</h1>
    <div className="button-group">
      <button className="btn" onClick={onIncrement}>+</button>
      <button className="btn" onClick={onDecrement}>-</button>
    </div>
  </div>
)

const reducers = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
    default: return state
  }
}

export const store = createStore(reducers, initialState, applyMiddleware(logger))

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter
          value={store.getState()}
          onIncrement={() => {
            console.log(store.getState())
            store.dispatch({
              type: 'INCREMENT'
            })
          }}

          onDecrement={
            () => {
              console.log(store.getState())
              store.dispatch({
                type: 'DECREMENT'
              })
            }
          }
        ></Counter>
      </div>
    )
  }
}
