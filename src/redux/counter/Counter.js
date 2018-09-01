import React from 'react'
import { connect } from 'react-redux'
import { add, minus } from './store/actions'

const Counter  = ({ count, lastUpdateAt, add,  minus }) => {
  return (
    <div className="Counter">
      <h2 className="count">{count}</h2>
      <div className="btn-group">
        <button className="btn btn-add" onClick={() => {
          return add (1)
        }}>+1</button>
        <button className="btn btn-minus" onClick={() => {
          return minus(1)
        }}>-1</button>
        <p className="stamp">last update at: <i>{lastUpdateAt}</i></p>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    count: state.count,
    lastUpdateAt: state.lastUpdateAt
  }
}

export default connect(
  mapStateToProps,
  {
    add,
    minus
  }
) (Counter)