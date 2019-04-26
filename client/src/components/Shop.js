import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import axios from "axios";
import ShopForm from "./ShopForm"

class Shop extends Component {
  state = {
      shop: {
          name: '',
          address: '',
          rental: '',
          buy: ''
      },
      redirectToHome: false,
      isEditFormDisplayed: false
  }

  componentDidMount = () => {
      console.log("component did mount")
      axios.get(`/api/v1/spot/${this.props.match.params.spotId}`).then(res => {
          this.setState({shop: res.data})
      })
  }
  createShop = (e) => {
        e.preventDefault()
        axios
            .post(`/api/v1/spot/${this.props.match.params.spotId}`, {
                name: this.state.shop.name,
                address: this.state.shop.address,
                rental: this.state.shop.rental,
                buy: this.state.shop.buy
            })
  }

  deleteShop = () => {
      axios.delete(`/api/v1/spot/${this.props.match.params.spotId}`).then(res => {
          this.setState({redirectToHome: true})
      })
  }

  toggleEditForm = () => {
      this.setState((state, props) => {
          return {isEditFormDisplayed: !state.isEditFormDisplayed}
      })
  }

  handleChange = (e) => {
      const cloneShop = {...this.state.shop}
      cloneShop[e.target.name] = e.target.value
      this.setState({shop: cloneShop})
  }

  updateShop = (e) => {
      e.preventDefault()
      axios
        .put(`/api/v1/shop/${this.props.match.params.spotId}`, {
            name: this.state.shop.name,
            description: this.state.shop.description
        })
        .then(res => {
            this.setState({shop: res.data, isEditFormDisplayed: false})
        })
  }

  render() {
      console.log("HELLOOOO")
    if(this.state.redirectToHome) {
        return (<Redirect to="/" />)
    }

    return (
      <div>
        <Link to="/">Back to Spots</Link>
        <ShopForm 
        shopId={this.props.match.params.spotId}
        />
        <h1>Shop</h1>
        <button onClick={this.toggleEditForm}>Edit</button>
        {
            this.state.isEditFormDisplayed
                ? <form onSubmit={this.updateShop}>
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
                        <label htmlFor="">Buy</label>
                        <textarea
                            id="buy"
                            name="buy"
                            onChange={this.handleChange}
                            value={this.state.shop.buy}
                        />
                    </div>
                    <button>Update</button>
                </form>
                : <div>
                    <div>
                        Name: {this.state.shop.name}
                    </div>
                    <div>
                        Address: {this.state.shop.address}
                    </div>
                    <div>
                        Rental: {this.state.shop.rental}
                    </div>
                    <div>
                        Buy: {this.state.shop.buy}
                    </div>
                    <button onClick={this.deleteShop}>Delete</button>
                </div>
        }
      </div>
    );
  }
}

export default Shop;