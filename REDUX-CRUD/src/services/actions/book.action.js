import axios from "axios"
import api from "../../api/api"

export const addBookDataSuc = (data) => {
    return{
        type : "ADD_BOOK_DATA_SUC",
        payload : data
    }
}

export const addBookDataRej = (errmsg) => {
    return{
        type : "ADD_BOOK_DATA_REJ",
        payload : errmsg
    }
}

export const findBookSuc = (data) => {
    return{
        type : "FIND_BOOK_SUC",
        payload : data
    }
}

export const findBookRej = (msg) => {
    return{
        type : "FIND_BOOK_REJ",
        payload : msg
    }
}

export const updateBookSuc = (data) => {
    return{
        type : "UPDATE_BOOK_SUC",
        payload : data
    }
}

export const updateBookRej = (msg) => {
    return{
        type : "UPDATE_BOOK_REJ",
        payload : msg
    }
}

export const deleteBook = (id) => {
    return{
        type : "DELETE_BOOK",
        payload : id
    }
}

export const getBooksDataSuc = (data) => {
    return{
        type : "GET_BOOKS_DATA_SUC",
        payload : data
    }
}

export const getBooksDataRej = (errMsg) => {
    return{
        type : "GET_BOOKS_DATA_REJ",
        payload : errMsg
    }
}

export const loading = () => {
    return{
        type : "LOADING"
    }
}

// thunk is used to give logics in action and thunk always return a function and action always return a logics and also it dispatch method which used to pass data from actions to reducer and it is provided by think.

export const getAsyncDelete = (id) => {
    return (dispatch) => {

        dispatch(loading())
        
        setTimeout(() => {
            dispatch(deleteBook(id))
        }, 2000)
    }
}

export const getBooksAsync = () => {
    return (dispatch) => {

        dispatch(loading())
        
        api.get('/books').then(res => {
            console.log("Res",res.data);
            dispatch(getBooksDataSuc(res.data))
            
        }).catch(err => {
            console.log(err);
            dispatch(getBooksDataRej(err.message))
        })
    }
}

export const addBooksAsync = (data) => {
    return (dispatch) => {

        dispatch(loading())
        
        api.post('/books', data).then(res => {
            console.log(res);
            dispatch(addBookDataSuc(res.data))
            
        }).catch(err => {
            console.log(err);
            dispatch(addBookDataRej(err.message))
        })
    }
}

export const findBooksAsync = (id) => {

    return dispatch => {

        dispatch(loading())

        api.get(`/books/${id}`).then((res) => {

            console.log("GetBooks",res);
            dispatch(findBookSuc(res.data))
        }).catch((err) => {

            console.log("Get Message",err);
            dispatch(findBookRej(err.message))
        })
    }
}   

export const updateBookAsync = (data) => {

    return dispatch => {
        dispatch(loading())

        api.put(`/books/${data.id}`,data).then((res) => {
            console.log("update",res);
            dispatch(updateBookSuc(res.data))
        }).catch((err) => {
            console.log("updateErr",err);
            dispatch(updateBookRej(err.message))
        })
    }

}

export const deleteBookAsync = (id) => {
    return dispatch => {
        dispatch(loading())

        api.delete(`/books/${id}`).then((res) => {
            console.log("delteBook",res);
            dispatch(getBooksAsync());
        }).catch((err) => {
            console.log("Bookmsg",err);
        })
    }
}