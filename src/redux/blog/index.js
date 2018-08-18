import React, { Component } from 'react'
import Posts from './components/Posts'
import PostForm from './containers/PostForm'

import './index.css'


class App  extends Component {
  render() {
    return (
     <div className="App">
        <div className="App-content">
          <PostForm />
          <Posts posts={posts}/>
        </div>
     </div>
    )
  }
}

export default App