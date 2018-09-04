import React from 'react'
import { PropTypes } from 'prop-types'
import { 
  BrowserRouter as Router,
  NavLink as Link,
  Route, Switch 
} from 'react-router-dom'

import route from './route'
import './index.css'



export default class App extends React.PureComponent {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    console.log("ROUTE CHANGED");
  }


  componentDidMount () {
    document.title = 'react examples'
  }

  getRouteJsx () {
    let childRoutes = route.childRoutes || []
    return (
      <Router>
        <div className="examples-wrapper">
          <ul className="examples-link">
            {
              childRoutes.map(childRoute => {
                let to = `/${route.path}/${childRoute.path}`
                return (
                  <li key={childRoute.path}>
                    <Link to={to}><span>{childRoute.name}</span></Link>
                  </li>
                )
              })
            }
          </ul>
          <div className="example-view">
            <Switch>
              {
                childRoutes.map(childRoute => {
                  let path = `/${route.path}/${childRoute.path}`
                  console.log(path)
                  return (
                    <Route path={path} component={childRoute.component} key={path}></Route>
                  )
                })
              }
            </Switch>
          </div>
        </div>
      </Router>
    )
  }

  render () {
    let examplesJsx = this.getRouteJsx()
    return (
      <div className="react-examples">
        <h3 className="title">{route.name}</h3>
        {examplesJsx}
      </div>
    )
  }
}
