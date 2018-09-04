import React, { Component } from 'react'
import Posts from './components/Posts'
import PostForm from './containers/PostForm'

import { Provider } from 'react-redux'
import store from './store'

import './index.css'


class Root  extends Component {
  render() {
    return (
     <div className="App">
        <div className="App-content">
          <PostForm />
          <Posts />
        </div>
     </div>
    )
  }
}

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Root></Root>
      </Provider>
    )
  }
}