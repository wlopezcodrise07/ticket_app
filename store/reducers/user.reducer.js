import { USERS } from '../../Data/Usuarios'
import { LOGIN_USER,UBICAR } from '../actions/user.action'

const initialState = {
    list: USERS,
    userSession: [],
    userCountry: 'PE',
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
        case UBICAR:
            return{
                ...state,
                userCountry: action.country,
            }
        default:
            return state
    }
    return state
}

export default UserReducer