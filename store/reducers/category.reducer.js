import { CATEGORIES } from '../../Data/Categories'
import { SELECT_CATEGORY,ADD_CATEGORY,UPDATE_CATEGORY,REMOVE_CATEGORY } from '../actions/category.actions'

const initialState = {
    list: CATEGORIES,
    selectedCategory : 1
}

const CategoryReducer = (state = initialState,action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            return {
                ...state,
                selectedCategory: action.categoryID
            }    
        default:
            return state
    }
}

export default CategoryReducer