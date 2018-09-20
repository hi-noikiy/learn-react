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
      remark: {
        value: '',
        error: ''
      },
      department: {
        value: 'Marketing',
        error: ''
      },
      remmber: {
        value: true
      }
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount () {
    document.title = 'FormSample'
  }

  onChange(e) {
    let $target = e.target
    const value = $target.type === 'checkbox' ? $target.checked : $target.value
    this.setState({
      [$target.name]: {
        value,
        error: ($target.value === '') ? `Please type in${$target.name}` : ''
      }
    })
  }

  onSubmit (e) {
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
          <form className="form" onSubmit={this.onSubmit}>
            <div className="form-group">
              <p className="form-input">
                <label htmlFor="username" className="label">Username:</label>
                <input type="text" name="username" id="username" className="form-control" onChange={this.onChange} />
              </p>
              {
                this.state['username'].error ? <p className="field-error">{this.state['username'].error}</p> : null
              }
            </div>
            <div className="form-group">
              <p className="form-input">
              <label htmlFor="remarks" className="label">Remark:</label>
              <textarea name="remark" id="remark" className="form-control" onChange={this.onChange} value={this.state.remark.value}></textarea>
              </p>
              {
                this.state['remark'].error ? <p className="field-error">{this.state['remark'].error}</p> : null
              }
            </div>
            <div className="form-group">
              <p className="form-input">
                <label htmlFor="department" className="label">Department:</label>
              </p>
              <p className="form-control">
                <select name="department" id="department" className="form-control" onChange={this.onChange} value={this.state.department.value}>
                  <option value="">Please Select department</option>
                  <option value="Tech">Tech</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Office">Office</option>
                </select>
              </p>
              {
                this.state['department'].error ? <p className="field-error">{this.state['department'].error}</p> : null
              }
            </div>
            <div className="form-group">
              <p className="form-input">
                <label htmlFor="remmber">remmber:</label>
                <input type="checkbox" name="remmber" id="remmber" checked={this.state.remmber.value} onChange={this.onChange}/>
              </p>
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
