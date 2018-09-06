import React, { Component } from 'react'

const enStrings = {
  submit: 'Submit',
  cancel: 'Cancel'
}

const cnStrings = {
  submit: '提交',
  cancel: '取消'
}

const languageContext = React.createContext(enStrings)

class languageProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locale: ''
    }
    this.switchLanguage = this.switchLanguage.bind(this)
  }

  switchLanguage() {

  }

  render() {
    return (
      <languageContext.Provider value={this.state.lang}>
        <button onClick={}></button>
      </languageContext.Provider>
    )
  }
}


export default class ContextLocalSample extends Component {
  render() {
    return (
      <div className="contextlocal-example">
        
      </div>
    )
  }
}
