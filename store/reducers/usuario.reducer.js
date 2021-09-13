import { USERS } from '../../Data/Usuarios'
import { LOGIN_USER } from '../actions/user.action'

const initialState = {
    list: USERS,
    userSession: [],
}

const UserReducer = (state = initialState,action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                userSession: action.user
            }
        default:
            return state
    }
    return state
}

export default UserReducer