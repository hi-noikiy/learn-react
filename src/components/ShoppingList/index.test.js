import React from 'react'
import ReactDOM from 'react-dom'

import {ShoppingList, ShoppingItem} from './index'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShoppingList items={
    [{
      name: 'rice',
      amount: 10
    }]
  }/>, div);
  ReactDOM.unmountComponentAtNode(div);
})


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShoppingItem name={'rice'} amount={10}/>,
  div)
})
