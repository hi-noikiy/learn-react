import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

class AdvancedTabSelector extends Component {
  static propTypes = {
    value: PropTypes.object,
    options: PropTypes.array,
    onChange: PropTypes.func,
    children: PropTypes.func,
    style: PropTypes.object
  }

  static defaultProps = {
    value: null,
    options: [],
    style: {},
    onChange: (value) => {
      this.setState({
        value
      })
    },
    children: () => {
      return (
        <span>{this.state.value || ''}</span>
      )
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  render () {
    const { options, value, onChange, children, style } = this.props
    return (
      <div className="AdvancedTab-wrapper" style={style}>
        <ul className="AdvancedTab-selector">
          {
            options.map(option => (
              <li
                key={option.value}
                className={'tab-item ' + (option.value === this.state.value ? 'selected' : '')}
                onClick={() => {
                  this.setState({
                    value: option.value
                  })
                  onChange(option.value)
                }}
              ><button className="btn">{option.name}</button></li>
            ))
          }
        </ul>
        <div className="AdvancedTab">
          {value && children(this.state.value)}
        </div>
      </div>
    )
  }
}

const colors = [
  { name: 'red', value: 'red' },
  { name: 'blue', value: 'blue' },
  { name: 'green', value: 'green' }
]

export default class AdvancedTabSelectorSample extends Component {
  componentDidMount () {
    document.title = 'AdvancedTabSelector demo'
  }

  render() {
    return (
      <div className="AdvancedTabSelectorSample">
        <AdvancedTabSelector 
          options={colors}
          value={'blue'}
          onChange={(value) => {
            console.log(`new  value is ${value}`)
          }}
        >
          {
            color => (
              <div>
                <hr/>
                <span
                  className={color}
                >{color}</span>
              </div>
            )
          }
        </AdvancedTabSelector>
      </div>
    )
  }
}
