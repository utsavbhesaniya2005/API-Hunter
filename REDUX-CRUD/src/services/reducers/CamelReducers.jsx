// /* eslint-disable no-case-declarations */
// import generateUniqueId from "generate-unique-id";

const initialState = {
    camels : [],
    camel : null,
    isLoading : false,
    errMsg : null,
    isSuccess : false
}

const CamelReducers = (state = initialState, action) => {

    
    switch(action.type){
        
        case 'ADD_CAMEL_DATA_SUC' :

            return { ...state, isSuccess : true} 

        case 'ADD_CAMEL_DATA_REJ' :

            return { ...state, errMsg : action.payload} 

        case 'FIND_CAMEL' : 
            
            // let recs = JSON.parse(localStorage.getItem('camels'));

            // let findCamel = recs.find(rec => {
            //     return rec.id == action.payload
            // })

            return {
                ...state,
                // camel : findCamel,
            }

        case 'UPDATE_CAMEL' :

            // let recs1 = JSON.parse(localStorage.getItem('camels'));

            // let updateCamel = recs1.map((rec) => {
            //     if(rec.id == action.payload.id){
            //         return action.payload
            //     }else{
            //         return rec
            //     }
            // })

            // localStorage.setItem('camels', JSON.stringify(updateCamel))

            return{
                ...state,
                // camels : updateCamel,
                camel : null 
            }
            
        case 'DELETE_CAMEL' :

            let rec2 = JSON.parse(localStorage.getItem('camels'));

            let deletedRec = rec2.filter(rec => rec.id !== action.payload )

            localStorage.setItem('camels', JSON.stringify(deletedRec))

            return{
                ...state,
                camels : deletedRec,
                isLoading : false
            }

        case 'GET_CAMELS_DATA_SUC' :

            return{
                ...state,
                isLoading : false,
                camels : action.payload
            }

        case 'GET_CAMELS_DATA_REJ' :

            return{
                ...state,
                isLoading : false,
                errMsg : action.payload
            }

        case 'LOADING' : 
            return{
                ...state,
                isLoading : true
            }

        default : 
            return state;

    }

}

export default CamelReducers;