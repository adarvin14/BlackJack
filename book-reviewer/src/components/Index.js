import React, { Component } from 'react'
import { connect } from 'react-redux';
import Book from './Books';

class Index extends Component {
  render() {
    const books = this.props.books.map( (book, i) => <Book key={i} title={ book.title } author={book.author} review={ book.review } />)

    return (
      <div>
        { books }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(Index);