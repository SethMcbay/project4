import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
// import SpotForm from './SpotForm'

export default class Spot extends Component {
    state = {
        spot: [],
        shop: [],
        notes: [],
        NewSpot: {
            name: '',
           location: '',
        },
        redirectToHome: false,
        isEditFormDisplayed: false
    };

    componentDidMount() {
        this.getSpot()
        
    }

    // get list 
    //put it in state 
    getSpot = async () => {
        try {
            
            const res = await axios.get(`/api/v1/spot/`);
            this.setState({ spot: res.data });
        }
        catch(err) {
            console.log(err)
        }
    };


    handleChange = (e) => {
        const clonedNewSpot = {...this.state.NewSpot}
        clonedNewSpot[e.target.name] = e.target.value
        this.setState({NewSpot: clonedNewSpot})
    }

    fetchSpot = async (spotId) => {
        try {
            const res = await axios.get(`/api/v1/spot/${spotId}/`)
            this.setState({
                spot: res.data,
                shop: res.data.shop
            });
        }
        catch(err) {
            console.log(err)
        }
    }

    addNewSpot = async (e) => {
        e.preventDefault()
         try {
            const res = await axios.post(`/api/v1/spot/`, this.state.NewSpot)
             this.setState({
                 redirectToHome: true
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

    toggleEditForm = () => {
        this.setState((state, props) => {
            return {isEditFormDisplayed: !state.isEditFormDisplayed}
        })
    }
    deleteSpot = () => {
        axios.delete(`/api/v1/spot/${this.props.match.params.id}/`).then(res => {
            this.props.history.goBack()
        })
    };


    render() {
        if(this.state.redirectToHome === true) {
            return  <Redirect to="/" />
        };

        return (
    

            <form onSubmit={this.addNewSpot}>
                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    onChange={this.handleChange}
                     
                />
                    
                    <input
            
                type='text'
                name='location'
                placeholder='location'
                onChange={this.handleChange}
           
                />
        {/* <button onClick={this.toggleEditForm}>Edit Spot</button> */}
        
            
        <button>Submit</button>
            </form>
  
           
        )
    }

 
}