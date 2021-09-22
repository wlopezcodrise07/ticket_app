import {URI_CATEGORY_API} from '../../constanst/Database'
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';

export const selectedCategory = (id) => ({
    type : SELECT_CATEGORY,
    categoryID : id,
})

export const insertCategory = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${URI_CATEGORY_API}/create`,{
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({name:'CURSOS'})
            })

            const result = await response.json();
            console.log(result.messages);
            dispatch({
                type: ADD_CATEGORY,
                confirm: true
            })
        } catch (e) {
            console.log(e.message)
        }
    }
}

export const updateCategory = (id) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URI_CATEGORY_API}/update/2`,{
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({name:'FUTBOL'})
            })

            const result = await response.json();
            console.log(result.messages);
            dispatch({
                type: UPDATE_CATEGORY,
                confirm: true
            })
        } catch (e) {
            console.log(e.message)
        }
    }
}

export const removeCategory = (id) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URI_CATEGORY_API}/delete/${id}`,{
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json'
                }
            })

            const result = await response.json();
            console.log(result.messages);
            dispatch({
                type: REMOVE_CATEGORY,
                confirm: true
            })
        } catch (e) {
            console.log(e.message)
        }
    }
}