import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import WelcomeDialog from './components/Composition/index'

ReactDOM.render(<WelcomeDialog />, document.getElementById('root'))
registerServiceWorker()
