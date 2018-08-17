import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './redux/counter/'
import { store } from './redux/counter'

import './assets/style/common.css'
import './assets/style/index.css'

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

render ()
store.subscribe(render)

registerServiceWorker()
