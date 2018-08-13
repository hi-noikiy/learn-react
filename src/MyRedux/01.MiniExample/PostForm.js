import React, { Component } from 'react'
import axios from 'axios'

export default class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }

  onChange (e) {
    let name = e.target.name
    let value = e.target.value
    
    this.setState({
      [name]: value
    })
  }

  onSubmit (e) {
    e.preventDefault()
    e.stopPropagation()

    let data = {
      title: this.state.title,
      body: this.state.body
    }

    axios.post('https://jsonplaceholder.typicode.com/post', data)
      .then( ({response}) => {
        console.log(response)
      }).catch(e => {
        this.setState(data)
      })
  }

  render() {
    return (
      <div className="PostForm" onSubmit={this.onSubmit.bind(this)}>
        <div className="PostForm-title">
          <h2 className="title">Add  Post</h2>
        </div>
        <form className="form" name="newPost">
          <div className="form-group">
            <label htmlFor="postTitle" className="label">title</label>
            <input type="text" name="title" onChange={this.onChange.bind(this)} className="form-control u-input" id="postTitle" placeholder="please type in post title"/>
          </div>
          <div className="form-group">
            <label htmlFor="postBody" className="label">content</label>
            <textarea name="body"  className="form-control u-textarea" onChange={this.onChange.bind(this)} id="postBody" cols="30" rows="10" placeholder="please type in post content"></textarea>
          </div>
          <div className="form-group submit-group">
            <button type="submit" className="btn btn-submit">submit</button>
          </div>
        </form>
      </div>
    )
  }
}
