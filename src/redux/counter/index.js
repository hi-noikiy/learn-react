import React, { Component } from 'react'
import { createStore } from 'redux'
import  './index.css'

const Counter = ({value, onIncrement, onDecrement}) => (
  <div className="Counter">
    <h1 className="value">{value}</h1>
    <div className="button-group">
      <button className="btn" onClick={onIncrement}>+</button>
      <button className="btn" onClick={onDecrement}>-</button>
    </div>
  </div>
)

const reducers = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
    default: return state
  }
}

export const store = createStore(reducers)

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
