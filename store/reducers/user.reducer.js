import { USERS } from '../../Data/Usuarios'
import { LOGIN_USER } from '../actions/user.action'

const initialState = {
    list: USERS,
    userSession: [],
    isLoggedIn: false,
}

const UserReducer = (state = initialState,action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                userSession: action.user,
                isLoggedIn: true,
            }
        default:
            return state
    }
    return state
}

export default UserReducer