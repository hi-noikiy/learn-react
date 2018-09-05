import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
  Route, NavLink as Link
} from 'react-router-dom';

export default class CustomLinkExample extends Component {
  componentDidMount () {
    document.title = 'react-router:demo08'
  }

  render() {
    return (
      <Router>
        <div className="example">
          <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
          <OldSchoolMenuLink to="/about" label="About" />
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

// Similar to WithRouter component
const OldSchoolMenuLink = ({to, activeOnlyWhenExact, label}) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <div className={match ? "active" : ""}>
          {match ? "> " : ""}
          <Link to={to} activeClassName="nav-link-active" className="nav-link">{label}</Link>
        </div>
      )}
    />
  )
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