import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import axios from "axios";

class Shop extends Component {
  state = {
      spot: {
          name: '',
          address: '',
          rental: '',
          buy: ''
      },
      redirectToHome: false,
      isEditFormDisplayed: false
  }

  componentDidMount = () => {
      axios.get(`/api/v1/${this.props.match.params.id}`).then(res => {
          this.setState({spot: res.data})
      })
  }

  deleteShop = () => {
      axios.delete(`/api/v1/${this.props.match.params.id}`).then(res => {
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
        .put(`/api/v1/${this.props.match.params.id}`, {
            name: this.state.shop.name,
            description: this.state.shop.description
        })
        .then(res => {
            this.setState({shop: res.data, isEditFormDisplayed: false})
        })
  }

  render() {
    if(this.state.redirectToHome) {
        return (<Redirect to="/" />)
    }

    return (
      <div>
        <Link to="/">Back to Spots</Link>
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
                            value={this.state.shop.description}
                        />
                    </div>
                    <div>
                        <label htmlFor="rental">Rental</label>
                        <textarea
                            id="rental"
                            name="rental"
                            onChange={this.handleChange}
                            value={this.state.shop.description}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Rental</label>
                        <textarea
                            id="rental"
                            name="rental"
                            onChange={this.handleChange}
                            value={this.state.shop.rental}
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