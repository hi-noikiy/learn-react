import React, { Component } from 'react'
import Sidebar from './Sidebar/index'
import MainView from './MainView/index'

export {
  Sidebar,
  MainView
}

export default class Page extends Component {
  render() {
    return (
      <div className="Page">
        {this.props.children}
      </div>
    )
  }
}
