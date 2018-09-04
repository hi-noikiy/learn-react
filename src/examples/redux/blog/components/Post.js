import React from 'react'
import { PropTypes } from 'prop-types'

import './Post.css'

const Post =  (props) => {
  let { title = `I'm a title`, content = `I'm post content`, id } = props
  let postTitle = `${id}. ${title}`
  return (
    <div className="Post">
      <h4 className="Post-title"> {postTitle} </h4>
      <div className="Post-content">
        <p>{content}</p>
      </div>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
export default Post