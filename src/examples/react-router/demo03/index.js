import { BrowserRouter as Router, Link } from 'react-router-dom'

import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount () {
    document.title = 'react-router:demo03'
  }

  render () {
    return (
      <Router basename="app">
        <div className="react-router-demo demo03">
          <h2 className="title">demo03 {'<BrowserRouter>'}basename</h2>
          <ul>
            <li><Link to={'/hello'}>/app/hello</Link></li>
          </ul>
        </div>
      </Router>
    )
  }
}
