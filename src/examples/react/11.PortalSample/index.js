import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

export default class PortalSample extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  renderButton () {
    return <button className="btn btn-open" onClick={() => {
      this.setState({
        visible: true
      })
      try {
        document.getElementById('other').classList.remove('is-open') 
      } catch (e) {
        console.log(e)
      }
    }}>打开对话框</button>
  }

  renderDialog() {
    return (
      <div className="PortalSample">
        <header className="dialog-header">
          <h2 className="title">这是一个对话框！</h2>
        </header>
        <div className="dialog-main">
          {this.props.children}
        </div>
        <div className="dialog-footer">
          <button className="btn btn-close" onClick={() => {
            this.setState({
              visible: false
            })
            try {
              document.getElementById('other').classList.remove('is-open') 
            } catch (e) {}
          }}>关闭对话框</button>
        </div>
      </div>
    )
  }

  render() {
    if (!this.state.visible) return this.renderButton()
    return ReactDOM.createPortal(
      this.renderDialog(),
      document.getElementById('other'),
    )
  }
}
