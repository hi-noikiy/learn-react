import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

import './Posts.css'

function Posts (props) {
  let posts = props.posts
    let postList = posts.map((post, index) => {
      return (
        <li key={post.id}>
          <Post title={post.title} content={post.body} />
        </li>
      )
    })
    return (
      <div className="Posts-wrapper">
        <h2 className="title">Posts</h2>
        <ul className="Posts-list">
          {postList}
        </ul>
      </div>
    )
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts
