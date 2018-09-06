import React, { Component } from 'react'
import withTimer from './withTimer'

class App extends Component {
  render() {
    let now = this.props.time
    return (
      <div className="react:demo07-01">
        current time: { (new Date(now)).toLocaleTimeString() }
      </div>
    )
  }
}

export default withTimer(App)
