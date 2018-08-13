import React, { Component } from 'react'
import axios from 'axios'

export default class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentWillMount () {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then( ({data}) => {
        this.setState(
          {
            posts: data
          }
        )
      })
  }

  render() {
    let posts = this.state.posts
    let postItems = posts.map(post => {
      return (
        <li className="list-item" key={post.id}>
          <Post title={post.title} body={post.body} />
        </li>
      )
    })

    return (
      <div className="Posts">
        <h2 className="Posts-title">Posts</h2>
        <div>
          <ul>
            {postItems}
          </ul>
        </div>
      </div>
    )
  }
}

function Post (props) {
  let { title, body } = props

  return (
    <div className="Post-item">
      <h3 className="Post-title">
        <span className="title">{title}</span>
      </h3>
      <div className="Post-content">
        <p>{body}</p>
      </div>
    </div>
  )
}
