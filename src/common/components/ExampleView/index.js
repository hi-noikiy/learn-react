import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  NavLink as Link,
  Switch,
  Route
} from 'react-router-dom'

import'./index.css'


class ExampleView extends Component {
  componentDidMount () {
    document.title = this.props.route.path
  }

  getExampleLinksJsx () {
    let childRoutes = this.props.route.childRoutes || []
    if (childRoutes.length) {
      return (
        <div className="ExampleView-navbar">
          <ul>
            {
              childRoutes.map(childRoute => {
                return (
                  <li key={childRoute.path.toLowerCase()}>
                    <Link to={`/${route.path}/${childRote.path}`} className="nav-link" activeClassName="nav-link-active">
                      {childRoute.path.toLowerCase()}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      )
    }

    return <div className="ExampleView-navbar"></div>
  }

  getExampleViewJSx () {
    let childRoutes = this.props.route.childRoutes || []
    if (childRoutes.length) {
      return (
        <div className="ExampleView-view">
          <div className="example">
            {
              <Switch>
                {
                  childRoutes.map(childRoute => {
                    let path = `/${route.path}/${childRoute.path}`
                    let component = childRoute.component
                    return (
                      <Route path={path} component={component}></Route>
                    )
                  })
                }
              </Switch>
            }
          </div>
        </div>
      )
    }
    return <div className="ExampleView-view">No examples</div>
  }

  render () {
    let route = this.props.route
    let navbarJsx = this.getExampleLinksJsx()
    let exampleViewJsx = this.getExampleViewJSx()
    return (
      <div className="ExampleView">
        {navbarJsx}
        {exampleViewJsx}
      </div>
    )
  }
}

export default ExampleView