import React, { Component } from 'react'
import axios from 'axios';

export class SpotOne extends Component {
    state = {
        spot: {
            name: '',
            location: ''
        }

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
  render() {
    return (
      <div>
          {this.state.spot.name}
          {this.state.spot.location}
          <form onSubmit={this.EditOneSpot}>
          <button onSubmit>Edit</button>
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
    )}

  
  
}

export default SpotOne;