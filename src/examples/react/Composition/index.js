import React from 'react'
import './index.css'

function FancyBorder(props) {
  return (
    <div className={props.surClass + 'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}

function Dialog (props) {
  let {
    title,
    message
  } = props

  return (
    <FancyBorder color="blue" surClass="Dialog ">
      <h1 className="Dialog-title">{title}</h1>
      <p className="Dialog-message">{message}</p>
    </FancyBorder>
  )
}

function WelcomeDialog (props) {
  return (
    <Dialog title="welcome" message="Thank you for visiting our spacecraft!">
    </Dialog>
  )
}


export default WelcomeDialog
