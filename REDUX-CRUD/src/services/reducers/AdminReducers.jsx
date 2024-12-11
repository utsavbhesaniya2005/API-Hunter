const initialState = {
    admins : [],
    admin : null,
    isActive : false
}

const AdminReducers = (state = initialState, action) => {

    switch(action.type){

        case 'ADD' : 
            console.log("ADD");
            return state

        case 'EDIT' :
            console.log("EDIT");
            return state;

        default :
            return state;
    }

}

export default AdminReducers;