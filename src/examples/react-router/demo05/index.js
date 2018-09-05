import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import React, { Component } from 'react'

const Demo = ({match}) => (
  <div className="Demo">
    <p>matched url is <i className="red">{match.url}</i></p>
  </div>
)
export default class App extends Component {
  componentDidMount () {
    document.title = 'react-router:demo05'
  }

  render () {
    return (
      <Router>
        <div className="react-router-demo demo05">
          <h2 className="title">demo05 {'<BrowserRouter>'}basename</h2>
          <ul className="example-navbar">
            <li><Link to="/hello1">Hello1</Link></li>
            <li><Link to="/hello2">Hello2</Link></li>
            <li><Link to="/hello3">Hello3</Link></li>
          </ul>
          <div className="example-view">
            <Route render={() => (
              <p className="weight-bold">Always matched</p>
            )}></Route>
            <Route path="/hello1" component={Demo}></Route>
            <Route path="/hello2" component={Demo}></Route>
            <Route path="/hello3" component={Demo}></Route>
          </div>
        </div>
      </Router>
    )
  }
}
