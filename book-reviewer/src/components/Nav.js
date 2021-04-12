import React, { Component } from 'react'

export class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/books/new">Create a Book to Review</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav
