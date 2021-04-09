const initialState = {
    books: [],
    loading: true
}

const booksReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "SET_BOOKS":
            return {
                ...state,
                loading: false,
                books: action.books
            }
        case "ADD_BOOK":
            return {
                ...state,
                books: [...state.books, action.book]
            }
        default:
            return state;
    }
}

export default booksReducer