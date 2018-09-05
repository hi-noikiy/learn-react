import { BrowserRouter, NavLink as Link, Switch, Route } from 'react-router-dom'
import './index.css'

import React, { Component } from 'react'

const ShowProperties = ({match, history, location}) => (
  <div className="ShowProperties">
    <div>
      <p className="match">
      <i className="red">match:</i>{JSON.stringify(match)}
      </p>
      <p className="history">
        <i className="red">history:</i>{JSON.stringify(history)}
      </p>
      <p className="location">
        <i className="red">location:</i>{JSON.stringify(location)}
      </p>
    </div>
  </div>
)
const Demo = (props) => (
  <div>
      <h3 className="weight-bold">
        content rendered by <i className="red">component</i>
      </h3>
      <ShowProperties {...props}/>
  </div>
)

export default class App extends Component {
  componentDidMount () {
    document.title = 'react-router:demo05'
  }

  render () {
    return (
      <BrowserRouter>
        <div className="react-router-demo05">
          <h2 className="title weight-bolder">Route component</h2>
          <ul className="example-navbar">
            <li>
              <Link to="/render" className="nav-link" activeClassName="nav-link-active">render</Link>
            </li>
            <li><Link to="/component" className="nav-link" activeClassName="nav-link-active">component</Link></li>
            <li><Link to="/children"  className="nav-link" activeClassName="nav-link-active">children</Link></li>
          </ul>

          <div className="example-view">
            <Switch>
              <Route path="/render" render={
                (props) => (
                  <div>
                    <h3>content rendered by <i className="red">render</i></h3>
                    <ShowProperties {...props} />
                  </div>
                )
              }></Route>
              <Route path="/component"  component={Demo}></Route>
              <Route path="/children" children={(props) => {
                return (
                  <div>
                    <h3>content rendeered by <i className="red">children</i></h3>
                    <ShowProperties {...props} />
                  </div>
                )
              }}>
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
