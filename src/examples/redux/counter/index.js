import React, { Component } from 'react'
import Counter from './Counter'
import './index.css'

import { Provider } from 'react-redux'
import store from './store'

export  class Root extends Component {
  render() {
    return (
      <div className="Example-container">
        <div className="Counter-wrapper">
          <Counter></Counter>
        </div>
      </div>
    );
  }
}

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Root></Root>
      </Provider>
    )
  }
}
