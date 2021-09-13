import { ADD_TICKET, REMOVE_TICKET } from "../actions/reserved.action";

const initialState = {
    list : []
}

const ReservedReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_TICKET:
            const updateReserve = [...state.list, action.ticket];
            return {
                ...state,
                list: updateReserve
            }    
        case REMOVE_TICKET:
            const deleteReserve = state.list.filter(x => x[0].id!=action.id)
            return {
                ...state,
                list: deleteReserve
            }   
        default:
            return state
    }
}

export default ReservedReducer