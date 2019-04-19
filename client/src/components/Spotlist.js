import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class SpotList extends Component {

    state = {
        spots: []
    }

    componentDidMount(){
        this.getSpots()
    }

    getSpots = async () => {
        const res = await axios.get('/api/v1/spot')
        const spots = res.data
        this.setState({spots})
    }

  render() {

    const spots = this.state.spots.map((spot, i) => {
        return (
            <div key={i}>
                <Link to={`spot/${spot._id}`}>{spot.name}</Link>
            </div>
        )
    })

    return (
      <div>
        {spots}
      </div>
    )
  }
}

