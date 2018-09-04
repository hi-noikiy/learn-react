import React from 'react'

export default class Sidebar extends React.PureComponent {
  render() {
    return (
      <div className="Sidebar">
        <div className="Sidebar-switch"></div>
        <div className="Sidbar-navs">
          {this.props.children}
        </div>
      </div>
    )
  }
}
