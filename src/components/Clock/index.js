import React, { Component } from 'react'
import './index.scss'

class Clock extends Component {
  // Class components should always call the base constructor with props.
  constructor(props) {
    super(props)
    // State is similar to props, but it is private and fully controlled by the component.
    this.state = {
      date: new Date()
    }
  }

  // When a component output is inserted in the DOM, react calls the componentDidMount life circle hooks.
  componentDidMount() {
    this.timerId = setInterval(() => {
      /* Every second the browser calls the tick () method. Inside it, the Clock component schedules a UI update by calling setState.
      with an object contains current time.
      */
      this.tick()
    }, 1000)
  }
  
  // f the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle hook so the timer is stopped
  componentWillUnmount () {
    clearInterval(this.timerId)
    this.timerId = null
  }

  tick () {
    // The Tick
    this.setState({
      date: new Date()
    })
  }
  // render function returns an instance of React class
  render () {
    // Whenever is a state change, render function is claled by React.
    return (
      <div className="Tick">
        <h1>Hello, world!</h1>
        <h2>It's {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Clock