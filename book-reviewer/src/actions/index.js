export const getBooks = () => {
    return dispatch => {
      dispatch({ type: "LOADING" })
      fetch("http://localhost:3001/books")
        .then(resp => resp.json())
        .then(books => dispatch({ type: "SET_BOOKS", books }))
    }
}
  
