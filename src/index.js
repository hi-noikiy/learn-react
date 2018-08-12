import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import NestedRoute from './ReactRouter/quick-start.02.nested-router'

ReactDOM.render(<NestedRoute/>, document.getElementById('root'))
registerServiceWorker()
