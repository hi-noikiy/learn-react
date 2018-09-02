import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './ReactRouter/demo01/index.js'


import './assets/style/common.css'
import './assets/style/index.css'

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)

registerServiceWorker()
