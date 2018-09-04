import React, { Component } from 'react'
import { connect} from 'react-redux'
import { createPost } from '../actions'

import './PostForm.css'
import { PropTypes } from 'prop-types'

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  onSubmit(e) {
    e.preventDefault()
    let post = {
      ...this.state
    }
    this.props.createPost(post)
  }

  render () {
    return (
      <div className="PostForm-wrapper">
        <h2 className="PostForm-title">Add Post</h2>
        <form onSubmit={this.onSubmit.bind(this)} className="form">
          <div className="form-group">
            <label htmlFor="blogTitle" className="label">title:</label>
            <input type="text" name="title" id="blogTitile" onChange={this.onChange.bind(this)} value={this.state.title} className="form-control u-text-input" />
          </div>
          <div className="form-group">
            <label htmlFor="blogContent" className="label">content:</label>
            <textarea name="body" id="blogContent" onChange={this.onChange.bind(this)} cols="30" rows="10" value={this.state.content} className="form-control u-textarea-input"></textarea>
          </div>
          <div className="form-group text-right">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, {
  createPost
} )(PostForm)