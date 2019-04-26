import React, { Component } from 'react'
import axios from 'axios'

export class ShopForm extends Component {
    state = {
        shop: {
        name: '',
        address: '',
        rental: '',
        buy: ''
    }
    }
    handleChange = (e) => {
        const cloneShop = {...this.state.shop}
        cloneShop[e.target.name] = e.target.value
        this.setState({shop: cloneShop})
    }
    createShop = (e) => {
        e.preventDefault()
        axios.post(`/api/v1/spot/${this.props.shopId}/`, {
                name: this.state.shop.name,
                address: this.state.shop.address,
                rental: this.state.shop.rental,
                buy: this.state.shop.buy
            })
        }
  render() {
    return (

      <div>
          <form onSubmit={this.createShop}>
                <div>
                   <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.shop.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            onChange={this.handleChange}
                            value={this.state.shop.address}
                        />
                    </div>
                    <div>
                        <label htmlFor="rental">Rental</label>
                        <textarea
                            id="rental"
                            name="rental"
                            onChange={this.handleChange}
                            value={this.state.shop.rental}
                        />
                    </div>
                    <div>
                        <label htmlFor="buy">Buy</label>
                        <textarea
                            id="buy"
                            name="buy"
                            onChange={this.handleChange}
                            value={this.state.shop.buy}
                        />
                        </div>
                        <button type="submit">Submit</button> 
                </form>
      </div>
    )
  }
}

export default ShopForm
