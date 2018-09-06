import React from 'react'

export default function withTimer (WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        time: Date.now()
      }
    }

    componentDidMount () {
      this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount () {
      clearInterval(this.timerID)
      this.timerID = null
    }

    tick () {
      this.setState({
        time: Date.now()
      })
    }

    render () {
      return <WrappedComponent timer={this.state.time} time={this.state.time} {...this.props}></WrappedComponent>
    }
  }
}
