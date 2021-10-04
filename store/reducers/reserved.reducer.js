import { ADD_TICKET, REMOVE_TICKET,LOAD_TICKET,SAVE_ORDER } from "../actions/reserved.action";

const initialState = {
    list : []
}

const ReservedReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_TICKET:
            return {
                ...state,
                list: action.list
            }    
        case REMOVE_TICKET:
            return {
                ...state,
                list: action.list
            }
            
        case LOAD_TICKET:
            return {
                ...state,
                list: action.list
            } 
        case SAVE_ORDER:
            return {
                ...state,
                list: action.list
            }      
        default:
            return state
    }
}

export default ReservedReducer