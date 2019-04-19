import React, { Component } from 'react';
import axios from 'axios'


class Notes extends Component {
    state = {
        note: {}
    }

    componentDidMount() {
        this.getNote()
    }


    getNote = async () => {
        const res = await axios.get(`/api/v1/note/${this.props.match.params.userId}/notes/${this.props.match.params.id}`)
        const wine = res.data
        this.setState({ wine })
    }
    render() {

        return (
          
        );
    }
}

export default Notes;

