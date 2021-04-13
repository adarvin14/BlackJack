import React, { Component } from 'react'

export class Book extends Component {
    render() {
        const { title, author, review } = this.props
        return (
            <div>
                <h3>{ title }</h3>
                <h3> { author }</h3>
                <p> { review }</p>
            </div>
        )
    }
}

export default Book
