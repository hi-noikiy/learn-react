import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import PropTypes from 'prop-types'

import Post from './Post'

import './Posts.css'

class Posts extends React.Component {

  componentWillMount () {
    this.props.fetchPosts()
  }

  render () {
    let posts = this.props.posts
    let postList = posts.map((post, index) => {
      return (
        <li key={post.id}>
          <Post title={post.title} content={post.body} id={post.id} />
        </li>
      )
    })

    return (
      <div className="Posts-wrapper">
        <h2 className="title">Posts</h2>
        <ul className="Posts-list">
          {postList.length ? postList : <p className="no-post">Not Post Now</p>}
        </ul>
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

function mapStateToProps (state) {
  return {
    posts: state.posts
  }
}

export default connect(
  mapStateToProps,
  { fetchPosts })(Posts)