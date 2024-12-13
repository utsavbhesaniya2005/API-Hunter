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

export const deleteBookTRej = (msg) => {
    return{
        type : "DELETE_BOOK_REJ",
        payload : msg
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

export const getBooksAsync = () => {
    return (dispatch) => {

        dispatch(loading())
        
        setTimeout(() => {
            api.get('/books').then(res => {
    
                dispatch(getBooksDataSuc(res.data))
                
            }).catch(err => {
             
                dispatch(getBooksDataRej(err.message))
            })
        }, 2000)
    }
}

export const addBooksAsync = (data) => {
    return (dispatch) => {

        dispatch(loading())
        
        setTimeout(() => {
            api.post('/books', data).then(res => {
       
                dispatch(addBookDataSuc(res.data))     
            }).catch(err => {
            
                dispatch(addBookDataRej(err.message))
            })
        }, 2000)
    }
}

export const findBooksAsync = (id) => {

    return dispatch => {

        dispatch(loading())

        setTimeout(() => {
            api.get(`/books/${id}`).then((res) => {

                dispatch(findBookSuc(res.data))
            }).catch((err) => {
    
                dispatch(findBookRej(err.message))
            })
        }, 2000)
    }
}   

export const updateBookAsync = (data) => {

    return dispatch => {
        dispatch(loading())

        setTimeout(() => {
            api.put(`/books/${data.id}`,data).then((res) => {
      
                dispatch(updateBookSuc(res.data))
            }).catch((err) => {
    
                dispatch(updateBookRej(err.message))
            })
        }, 2000)
    }

}

export const deleteBookAsync = (id) => {
    return dispatch => {
        dispatch(loading())

        api.delete(`/books/${id}`).then(() => {
        
            dispatch(getBooksAsync());
        }).catch((err) => {

            dispatch(deleteBookTRej(err.message))
        })
    }
}