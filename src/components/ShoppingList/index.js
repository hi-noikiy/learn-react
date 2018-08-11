import React, { Component } from 'react'
import './index.css'

class ShoppingList extends Component {
  render () {
    const items = this.props.items || []
    const ListItems = items.map((item, index) => {
      return (
        // Dont use index as a key. Not recomanded
        <li className="list-item" key={item.name}>
          <ShoppingItem name={item.name} amount={item.amount}/>
        </li>
      )
    })

    return (
      <div className="shoping-list-wrapper">
        <ul className="shopping-list">
          {ListItems}
        </ul>
      </div>
    )
  }
}

class ShoppingItem extends Component {
  render () {
    const props = this.props
    return (
      <div className="shopping-item">
        <span className="name">{props.name}</span>
        <span className="amount">{props.amount}</span>
      </div>
    )
  }
}


export default ShoppingList

export {
  ShoppingItem,
  ShoppingList
}
