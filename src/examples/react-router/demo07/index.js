import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink as Link, Route, Redirect } from 'react-router-dom';

const Auth = {
  isAuthenticated: false,
  sign: function (cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
    return this
  },
  unsign: function (cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
    return this
  }
}

const AuthButton = ({match, history, location}) => {
  if (Auth.isAuthenticated) {
    return <button
      onClick={() => {
        Auth.unsign(() => {
          history.push('/')
        })
      }}
    >unsign</button>
  }
  return (
    <button className="btn btn-login" onClick={
      () => {
        Auth.sign(() => {
          history.push('/protected', {})
        })
      }
    }>
      login
    </button>
  )
}

export default class App extends Component {
  componentDidMount () {
    document.title = 'react-router: auth'
  }

  render() {
    return (
      <Router>
        <div className="example">
          <div className="example-navbar">
            <ul>
              <li>
                <Link to="/public"><span>Public Page</span></Link>
              </li>
              <li>
                <Link to="/protected"><span>Protected page</span></Link>
              </li>
            </ul>
          </div>
          <div className="example-view">
            <Route path="/login" component={Login} />
            <Route path="/public" render={Public}></Route>
            <Route path="/protected" render={Protected}></Route>
          </div>
        </div>
      </Router>
    )
  }
}

const Public = (props) => {
  return (
    <Page>
      <h2 className="title weight-bold">Public page</h2>
    </Page>
  )
}

const Protected = (props) => {
  if (Auth.isAuthenticated) {
    return (
      <Page>
        <h2 className="title weight-bold">Proteched page</h2>
        <p>Wana sign out? <AuthButton {...props}></AuthButton></p>
      </Page>
    )
  }
  return <Redirect to="/login"></Redirect>
}

const Login = (props) => {
  return (
    <Page>
      You are not signed, please 
      <AuthButton {...props}></AuthButton>
    </Page>
  )
}

class Page  extends React.Component {
  render () {
    return (
      <div className="Page">
        {this.props.children}
      </div>
    )
  }
}