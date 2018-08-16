import React from 'react'
import { PropTypes } from 'prop-types'

import './Post.css'

const Post =  (props) => {
  let { title, content } = props
  return (
    <div className="Post">
      <h4 className="Post-title"> {title} </h4>
      <div className="Post-content">
        <p>{content}</p>
      </div>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Post