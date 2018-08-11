import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import ShoppingList from './components/ShoppingList/index';

const myShopingList = [
  {name: 'sugar', amount: 100},
  {name: 'oil', amount: 100},
  {name: 'onion', amount: 100},
]

ReactDOM.render(<ShoppingList items={myShopingList}/>, document.getElementById('root'))
registerServiceWorker()
