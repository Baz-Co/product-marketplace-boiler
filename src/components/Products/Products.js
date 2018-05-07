import React, { Component } from 'react'

// import ProductThumb from './ProductThumb/ProductThumb'

import ProductJSON from './ProductsExampleJSON.json'

class Products extends Component {
  constructor() {
    super()

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.fetchProducts()
  }

  fetchProducts() {
    return new Promise((res, rej) => {
      if(ProductJSON) {
        res(ProductJSON)
      } else {
        rej(Error('products failed to load'))
      }
    })
    .then(result => {
      this.setState({products: result})
      // console.log('products loaded', result)
    }, err => console.warn(err))
  }

  render() {
    var renderProducts = () => {
      if(!this.state.products || this.state.products.length === 0) {
        return <p className="loading">Loading Products...</p>
      } else {
        return (
          this.state.products.map(product => {
            return (
              <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            )
          })
        )
      }
    }

    return (
      <div>
        { renderProducts() }
        <h3>
          Red Belt
        </h3>
        <p>
          Firey, Fierce Accent.
        </p>
      </div>      
    )
  }
}

export default Products
