import React from 'react'
import './index.css'

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category
    return (
      <tr>
        <th className="caption"><h3 className="title">{category}</h3></th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const rows = []
    let lastCategory = null;
    
    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        )
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      )
      lastCategory = product.category
    });

    return (
      <table className="table">
        <thead className="thead">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <form className="form">
          <div className="form-group">
            <input type="text" className="form-control u-input" placeholder="Search..." />
          </div>
          <div className="form-group">
            <input type="checkbox" className="form-control u-checkbox"/> {' '} Only show products in stock
          </div>
        </form>
      </div>
    );
  }
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div className="FilterableProductTable">
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    )
  }
}


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
 

export default class App extends React.Component {
  render () {
    return (
      <div className="FilterableProductTable-wrapper">
        <FilterableProductTable products={PRODUCTS}></FilterableProductTable>
      </div>
    ) 
  }
}