import React from 'react'

export default class MainView extends React.PureComponent {
  render() {
    let match = this.props.match
    return (
      <div className="MainView">
        {JSON.stringify(match)}
        {this.props.children}
      </div>
    )
  }
}

