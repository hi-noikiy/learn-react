import React, { Component } from 'react'
import Posts from './Posts'
import PostForm from './PostForm'

import './index.css'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <Posts />
      </div>
    )
  }
}
