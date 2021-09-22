import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import CategoryReducer from './reducers/category.reducer'
import EventReducer from './reducers/event.reducer'
import UserReducer from './reducers/user.reducer'
import ReservedReducer from './reducers/reserved.reducer'
import OrderReducer from './reducers/order.reducer'

const RootReducer = combineReducers({
    categories : CategoryReducer,
    events : EventReducer,
    users : UserReducer,
    tickets : ReservedReducer,
    orders : OrderReducer,
})


export default createStore(RootReducer,applyMiddleware(thunk))