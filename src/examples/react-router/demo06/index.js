import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink as Link, Switch} from 'react-router-dom';

export default class App extends Component {
  componentDidMount () {
    document.title = 'react-router:demo06'
  }

  render() {
    return (
      <BrowserRouter>
        <div className="example">
          <ul className="example-navbar">
            <li>
              <Link to="/hello1" className="nav-link" activeClassName="nav-link-active"><span>hello1</span></Link>
            </li>
            <li>
              <Link to="/hello2" className="nav-link" activeClassName="nav-link-active"><span>hello2</span></Link>
            </li>
            <li>
              <Link to="/hello3" className="nav-link" activeClassName="nav-link-active"><span>hello3</span></Link>
            </li>
            <li>
              <Link to="/hello4" className="nav-link" activeClassName="nav-link-active"><span>hello4</span></Link>
            </li>
          </ul>
          <Switch>
            // Wihtout setting path property for Route, it matches all the URLs
            <Route component={Page}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


class Page extends React.PureComponent {
  constructor(props) {
    super(props)
    this.goBack = this.goBack.bind(this)
    this.goNext = this.goNext.bind(this)
  }

  goBack () {
    let history = this.props.history
    if (history) {
      history.go(-1)
    }
  }

  goNext () {
    let history = this.props.history
    if (history) {
      history.go(1)
    }
  }

  render () {
    let { match, history, location } = this.props
    if (location && location.pathname !== '/') {
      return (
        <div className="Page">
          <h4 className="font-weight-bolder">Page:{match.url}</h4>
          <div className="btn-group">
            <button className="btn btn-back" onClick={this.goBack}>Go back</button>
            <button className="btn btn-next" onClick={this.goNext}>Go next</button>
          </div>
          <div>
            <p>{JSON.stringify(match)}</p>
            <p>{JSON.stringify(location)}</p>
            <p>{JSON.stringify(history)}</p>
          </div>
        </div>
      )
    }
    return (
      <div className="Page">
        <h3 className="weight-bold">
          {`I'm the root of site`}
        </h3>
      </div>
    )
  }
}
