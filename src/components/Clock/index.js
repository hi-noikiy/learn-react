import React, { Component } from 'react'
import './index.css'

class Clock extends Component {
  // Class components should always call the base constructor with props.
  constructor(props) {
    super(props)
    // State is similar to props, but it is private and fully controlled by the component.
    this.state = {
      date: new Date(),
      active: true
    }
  }

  // When a component output is inserted in the DOM, react calls the componentDidMount life circle hooks.
  componentDidMount() {
    this.activateTimer()
  }
  
  // if the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle hook so the timer is stopped
  componentWillUnmount () {
    clearInterval(this.timerId)
    this.timerId = null
  }

  activateTimer () {
    this.timerId = setInterval(() => {
      /* Every second the browser calls the tick () method. Inside it, the Clock component schedules a UI update by calling setState.
      with an object contains current time.
      */
      this.tick()
    }, 1000) 
  }

  tick () {
    // schedule an update by setState
    this.setState({
      date: new Date()
    })
  }

  // e is an instance of SyntheticEvent
  toggleTimer (e) {
    // console.log(this, e)
    // call manually rather than return false expression
    e.preventDefault()
    e.stopPropagation()

    let isActive

    if (this.timerId) {
      clearInterval(this.timerId)
      this.timerId = null
      isActive = false
    } else {
      this.activateTimer()
      isActive = true
    }

    this.setState((prevState, props) => {
      return {
        active: isActive
      }
    })
  }

  // render function returns an instance of React class
  // Whenever is a state change, render function is claled by React.
  render () {
    let btnText = this.state.active ? 'Off' : 'On'
    return (
      <div className="Clock">
        <h1>Hello, world!</h1>
        <h2>It's {this.state.date.toLocaleTimeString()}</h2>
        <button className="btn" onClick={this.toggleTimer.bind(this)}>{btnText}</button>
      </div>
    )
  }
}

export default Clock