import {createStore,combineReducers} from 'redux'

import CategoryReducer from './reducers/category.reducer'
import EventReducer from './reducers/event.reducer'
import UserReducer from './reducers/usuario.reducer'
import ReservedReducer from './reducers/reserved.reducer'

const RootReducer = combineReducers({
    categories : CategoryReducer,
    events : EventReducer,
    users : UserReducer,
    tickets : ReservedReducer,
})


export default createStore(RootReducer)