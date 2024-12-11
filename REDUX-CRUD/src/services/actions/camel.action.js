import axios from "axios"

export const addCamelDataSuc = () => {
    return{
        type : "ADD_CAMEL_DATA_SUC"
    }
}

export const addCamelDataRej = (errmsg) => {
    return{
        type : "ADD_CAMEL_DATA_REJ",
        payload : errmsg
    }
}

export const findSingleCamel = (id) => {
    return{
        type : "FIND_CAMEL",
        payload : id
    }
}

export const updateCamel = (updateRecs) => {
    return{
        type : "UPDATE_CAMEL",
        payload : updateRecs
    }
}

export const deleteCamel = (id) => {
    return{
        type : "DELETE_CAMEL",
        payload : id
    }
}

export const getCamelsDataSuc = (data) => {
    return{
        type : "GET_CAMELS_DATA_SUC",
        payload : data
    }
}

export const getCamelsDataRej = (errMsg) => {
    return{
        type : "GET_CAMELS_DATA_REJ",
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
            dispatch(deleteCamel(id))
        }, 2000)
    }
}

export const getAsyncCamels = () => {
    return (dispatch) => {

        dispatch(loading())
        
        axios.get('http://localhost:3001/camels').then(res => {
            console.log("Res",res.data);
            dispatch(getCamelsDataSuc(res.data))
            
        }).catch(err => {
            console.log(err);
            dispatch(getCamelsDataRej(err.message))
        })
    }
}

export const getAsyncAddCamels = (data) => {
    return (dispatch) => {

        dispatch(loading())
        
        axios.post('http://localhost:3001/camels', data).then(res => {
            console.log("Res",res.data);
            dispatch(addCamelDataSuc())
            
        }).catch(err => {
            console.log(err);
            dispatch(addCamelDataRej(err.message))
        })
    }
}