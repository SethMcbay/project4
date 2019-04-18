import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
// import SpotForm from './SpotForm'

class Spot extends Component {
    state = {
        spot: {},
        shop: [],
        notes: [],
        redirectToHome: false,
        isEditFormDisplayed: false
    }

    componentDidMount() {
        const spotId = this.props.match.params.id
        this.fetchSpot(spotId)
    }

    fetchSpot = async (spotId) => {
        try {
            const res = await axios.get(`/api/v1/spot/${spotId}/`)
            this.setState({
                spot: res.data,
                shop: res.data.shop
            })
        }
        catch(err) {
            console.log(err)
        }
    }

    deleteSpot = async () => {
         try {
            const res = await axios.delete(`/api/v1/spot/${this.props.match.params.id}/`)
             this.setState({
                 redirectToHome: true
            })
        }
       catch(err) {
            console.log(err)
       }
    }

    updateSpot = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`/api/v1/spot/${this.props.match.params.id}/`, this.state.spot)
            this.setState({
                spot: res.data,
                isEditFormDisplayed: false
            })
        }
        catch(err) {
            console.log(err)
        }
    }

    handleChange = (e) => {
        const clonedSpot = {...this.state.spot}
        clonedSpot[e.target.name] = e.target.value

        this.setState({
            spot: clonedSpot
        })
    }

    toggleEditForm = () => {
        this.setState((state, props) => {
            return {isEditFormDisplayed: !state.isEditFormDisplayed}
        })
    }

    render() {
        if(this.state.redirectToHome === true) {
            return <Redirect to="/" />
        }

        return (
            <div>
                Im spot component
                <button onClick={this.deleteSpot}>
                    Delete
                </button>
                <button onClick={this.toggleEditForm}>
                    {this.state.isEditFormDisplayed === true ? 'Hide Edit Form' : 'Edit'}
                </button>
                {
                    this.state.isEditFormDisplayed
                        // // ? <SpotForm
                        //     spot={this.state.spot}
                        //     handleChange={this.handleChange}
                        //     handleSubmit={this.updateSpot}
                        //     submitBtnText="Update"
                        // />
                        // <div>
                        //     <img src={this.state.spot} alt={this.state.spot.name}/>
                        //     <h1>{this.state.spot.name}</h1>
                        // </div> // :
                }
                {/* {
                    this.state.shop.map(shop => {
                        return (
                            <div key={shop.id}>
                                <h4>{shop.title}</h4>
                            
                            </div>
                        )
                    })
                } */}
            </div>
        )
    }
}

export default Spot