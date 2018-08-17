import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'

import {App, reducers} from './redux/counter/'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './assets/style/common.css'
import './assets/style/index.css'

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'))

registerServiceWorker()
