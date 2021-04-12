import React, { Component } from 'react'

export class Form extends Component {
    state = {
        title: "",
        author: "",
        review: "",
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
    
        this.props.addBook(this.state, this.props.history);
    }

    render() {
        return (
            <div>
                Form
            </div>
        )
    }
}

export default From
