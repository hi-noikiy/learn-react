import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './examples/react-router/demo08'

import './common/style/common.css'

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)

registerServiceWorker()
