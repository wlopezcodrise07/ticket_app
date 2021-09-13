import { EVENTS } from '../../Data/Events'
import { FILTER_EVENTS, SELECT_EVENT } from '../actions/event.action'
const initialState = {
    list: EVENTS,
    filteredEvents: EVENTS.filter(p => p.category === 1),
    selectedEvent:  EVENTS.filter(p => p.category === 1).find(element=>element.id>0).id
}

const EventReducer = (state = initialState,action) => {
    switch (action.type) {
        case FILTER_EVENTS:
            return {
                ...state,
                filteredEvents: state.list.filter(item => item.category === action.categoryID),
                selectedEvent: state.list.filter(item => item.category === action.categoryID).find(element=>element.id>0).id,
            }           
        case SELECT_EVENT:
            return {
                ...state,
                selectedEvent: action.eventID,
            }     
        default:
            return state
    }
}

export default EventReducer