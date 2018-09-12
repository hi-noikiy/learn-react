import React, { Component } from 'react'
import './index.css'

export default class FormSample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: {
        value: '',
        error: ''
      },
      password: {
        value: '',
        error: ''
      }
    }
  }

  componentDidMount () {
    document.title = 'FormSample'
  }

  onchange (e) {
    let $target = e.target
    this.setState({
      [$target.name]: {
        value: $target.value,
        error: ($target.value === '') ? `请输入${$target.name}` : ''
      }
    })
  }

  onsubmit (e) {
    e.preventDefault()
    let hasError = false
    Object.keys(this.state).forEach(key => {
      if (this.state[key].value === '') {
        this.setState({
          [key]: {
            value: '',
            error: `Please input ${key}`
          }
        })
        hasError = true
      }
    })
    if (hasError) {
      return window.alert(`Can't not submit`)
    } else {
      console.log(this.state)
      return window.alert('Can submit')
    }
  }

  render() {
    return (
      <div className="FormSample">
        <header>
          <h4 className="FormSample-title">A Form demo</h4>
        </header>
        <div className="FormSample-main">
          <form className="form" onSubmit={this.onsubmit.bind(this)} ref={this.form}>
            <div className="form-group">
              <p className="form-input">
                <label htmlFor="username" className="lable">username</label>
                <input type="text" name="username" id="username" className="form-control" onChange={this.onchange.bind(this)} />
              </p>
              {
                this.state['username'].error ? <p className="field-error">{this.state['username'].error}</p> : null
              }
            </div>
            <div className="form-group">
              <p className="form-input">
                <label htmlFor="password" className="lable">password</label>
                <input type="password" name="password" id="password" className="form-control" onChange={this.onchange.bind(this)} />
              </p>
              {
                this.state['password'].error ? <p className="field-error">{this.state['password'].error}</p> : null
              }
            </div>
            <div className="form-group">
              <p className="form-input  button-group">
                <button type="submit">Submit</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
