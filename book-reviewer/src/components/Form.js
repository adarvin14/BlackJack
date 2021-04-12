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
                <h3>Create a Book</h3>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <label htmlFor="title">Title </label>
                        <input type="text" id="title" name="title" value={ this.state.title } onChange={ this.handleChange } />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="author">Author </label>
                        <input type="text" id="author" name="author" value={ this.state.author } onChange={ this.handleChange } />
                    </div>
                    <br />
                    <div>
                        <p><label htmlFor="review">Review</label></p>
                        <textarea id="review" name="review" value={ this.state.review } onChange={ this.handleChange }></textarea>
                    </div>
                    <br />
                    <input type="submit" value="Create Book" />
                </form>
            </div>
        )
    }
}

export default From
