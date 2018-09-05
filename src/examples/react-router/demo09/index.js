import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
  Route, NavLink as Link
} from 'react-router-dom'

import './index.css'

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>Home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
]

export default class SidebarExample extends Component {
  componentDidMount () {
    document.title = 'react-router:demo09'
  }

  render() {
    return (
      <Router>
        <div className="react-router demo09">
          <div className="sidebar">
            <ul>
              {
                routes.map(route => {
                  let navTxt = route.path.replace('/', '')
                  if (navTxt === '') {
                    navTxt = 'Home'
                  }
                  return (
                    <li key={route.path.replace('/')}>
                      <Link 
                        to={route.path}
                        className="nav-link"
                        activeClassName="nav-link-active"
                        exact={route.exact}
                        >
                        {navTxt}
                        </Link>
                    </li>
                  )
                })
              }
            </ul>
            <div className="breadcrumb">
              {
                routes.map(route => {
                  return (
                    <Route path={route.path} component={route.sidebar} exact={route.exact}></Route>
                  )
                })
              }
            </div>
          </div>
          <div className="view">
              {
                routes.map(route => {
                  return (
                    <Route path={route.path} component={route.main} exact={route.exact}></Route>
                  )
                })
              }
          </div>
        </div>
      </Router>
    )
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)