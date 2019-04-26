import React, { Component } from 'react'
import axios from 'axios';
import {Redirect} from "react-router-dom"

export class SpotOne extends Component {
    state = {
        spot: {
            name: '',
            location: ''
        },
        redirectToHome: false

    }
    componentDidMount() {
        this.getOneSpot()
        
    }

    // get list 
    //put it in state 
    getOneSpot = async () => {
        try {
            
            const res = await axios.get(`/api/v1/spot/${this.props.match.params.spotId}/`);
            this.setState({ spot: res.data });
        }
        catch(err) {
            console.log(err)
        }
    };
    handleChange = (e) => {
        const clonedOneSpot = {...this.state.spot}
        clonedOneSpot[e.target.name] = e.target.value
        this.setState({spot: clonedOneSpot})
    }
    updateSpot = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`/api/v1/spot/${this.props.match.params.spotId}/`, this.state.spot)
            this.setState({
                spot: res.data,
                isEditFormDisplayed: false,
                redirectToHome: true
            })
        }
        catch(err) {
            console.log(err)
        }
    }
    deleteSpot = async () => {
        try {
            const res = await axios.delete(`/api/v1/spot/${this.props.match.params.spotId}/`)
            this.setState({
                redirectToHome: true
            })
        }
        catch(err) {
            console.log(err)
        }
    }
  render() {
      if(this.state.redirectToHome===true) {
          return(
              <Redirect to ={"/"}/>)
          
      }

    return (
        <div>
        <div>
          <button onClick={() => this.deleteSpot(this.state.spot.spotId)}>Delete</button>
          {/* <button onClick={() => this.updateSpot(this.state.spot.spotId)}>Edit</button> */}
          {/* <button onClick={this.toggleEditForm}>Edit Spot</button> */}
          {this.state.spot.name}
          {this.state.spot.location}
          <form onSubmit={this.updateSpot}>
          <button type="submit">Edit</button>
          
         
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
          </form>
        
        
            </div>
            </div>
    


    )}

  
  
}

export default SpotOne;