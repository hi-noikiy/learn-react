import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './MyRedux/01.MiniExample/'

import './common.css'
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
