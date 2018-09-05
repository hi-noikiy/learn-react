import React from 'react'
import {
  BrowserRouter as Router,
  Route, 
  NavLink as Link,
  Switch
} from 'react-router-dom'

import './index.css'

export default class ExampleDemo10 extends React.Component {
  componentDidMount () {
    document.title = 'react-router:demo09'
  }
  render () {
    return (
     <Router>
       <div className="react-router demo10">
        <div className="navbar">
          <ul>
          <li>
            <Link to="/about">About Us (static)</Link>
          </li>
          <li>
            <Link to="/company">Company (static)</Link>
          </li>
          <li>
            <Link to="/kim">Kim (dynamic)</Link>
          </li>
          <li>
            <Link to="/chris">Chris (dynamic)</Link>
          </li>
          </ul>
        </div>
        <div className="view">
          <Switch>
            <Route path="/about" render={() => <div>About</div>}></Route>
            <Route path="/company" render={() => <div>Company</div>}></Route>
            <Route path="/:username" render={
              ({match}) => <div><strong>User</strong>:{match.params.username}</div>}>
            </Route>
          </Switch>
        </div>
      </div>
     </Router>
    )
  }
}
