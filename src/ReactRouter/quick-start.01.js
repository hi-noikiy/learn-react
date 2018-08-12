import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import React, { Component}  from 'react'
import './quick-start.01.css'

function Page (props) {
  return <div>{props.name}</div>
}

function Home () {
  return (
    <div className="page">
      <Page name={'welcome'} />
    </div>
  )
}

function Hello () {
  return (
    <div className="page">
      <Page name={'hello'} />
    </div>
  )
}

function About () {
  return (
    <div className="page">
      <Page name={'about'} />
    </div>
  )
}

function User (route) {
  let  { match } = route
  let user = `user:${match.params.id}`
  return (
    <div className="page">
      <Page name={user}></Page>
    </div>
  )
}

class App extends Component {
  render () {
    return (
      <Router>
       <div className="react-router-demo">
          <ul id="menu">
            <li><NavLink exact to="/" className="router-link" activeClassName="router-link-active">Home</NavLink></li>
            <li><NavLink to="/hello" className="router-link" activeClassName="router-link-active">Hello</NavLink></li>
            <li><NavLink to="/about" className="router-link" activeClassName="router-link-active">About</NavLink></li>
            <li><NavLink to="/user/1"  className="router-link" activeClassName="router-link-active">User</NavLink></li>
          </ul>
      
          <div id="page-container">
            <Route exact path="/" component={Home}></Route>
            <Route path="/hello" component={Hello}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/user/:id" component={User}></Route>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
