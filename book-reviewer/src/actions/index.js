export const getBooks = () => {
    return dispatch => {
        dispatch({ type: "LOADING" })
        fetch("http://localhost:3001/books")
            .then(resp => resp.json())
            .then(books => dispatch({ type: "SET_BOOKS", books }))
    }
}
  
export const addBook = (book, history) => {
    return dispatch => {
        fetch('http://localhost:3001/books', {
            method: "POST",
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
            body: JSON.stringify({ book })
        })
            .then(resp => resp.json())
            .then(book => {
            dispatch({ type: "ADD_BOOK", book })
            history.push("/books")
        })
    }
}