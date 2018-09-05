import { BrowserRouter, Link } from 'react-router-dom'

import React, { Component } from 'react'

const getConfirmation = (message, callback) => {
  alert(message)
  callback()
}

export default class App extends Component {
  componentDidMount () {
    document.title = 'react-router:demo04'
  }

  render () {
    return (
      <BrowserRouter getUserConfirmation={getConfirmation('welcome', () => {})}>
        <div className="react-router-demo demo03">
          <h2 className="title">demo04 {'<BrowserRouter>'}basename</h2>
          <ul>
            <li><Link to={'/hello'}>hello</Link></li>
          </ul>
        </div>
      </BrowserRouter>
    )
  }
}
