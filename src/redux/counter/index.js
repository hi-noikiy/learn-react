import React from 'react'
import { connect } from 'react-redux'

import  './index.css'

const Counter = ({count, onIncreaseClick, onDecreaseClick}) => (
  <div className="Counter">
    <h1 className="value">{count}</h1>
    <div className="button-group">
      <button className="btn" onClick={onIncreaseClick}>+1</button>
      <button className="btn" onClick={onDecreaseClick}>-1</button>
    </div>
  </div>
)

export const reducers = (state= {count: 0}, {type, playload}) => {
  switch(type) {
    case 'INCREMENT': 
      return Object.assign({
        count: state.count + playload
      })
    case 'DECREMENT': 
      return Object.assign({
        count: state.count + playload
      })
    default: return state
  }
}


function mapStateToProps (state) {
  return {
    count: state.count
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onIncreaseClick: () => {
      dispatch({
        type: 'INCREMENT',
        playload: 1
      })
    },
    onDecreaseClick: () => {
      dispatch({
        type: 'DECREMENT',
        playload: 1
      })
    }
  }
}


export const App =  connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

