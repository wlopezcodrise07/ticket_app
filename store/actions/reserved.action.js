import {URI_ORDER_API} from '../../constanst/Database'
export const ADD_TICKET = 'ADD_TICKET';
export const REMOVE_TICKET = 'REMOVE_TICKET';
export const SAVE_ORDER = 'SAVE_ORDER';

export const addTicket = (ticket) => ({
    type : ADD_TICKET,
    ticket : ticket,
})
export const removeTicket = (id) => ({
    type : REMOVE_TICKET,
    id : id,
})
const saveDetailOrder = (reserva,id) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URI_ORDER_API}/create_detail/${id}`,{
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({
                    reserva
                })
            })

            const result = await response.json();
            console.log(result);
            dispatch({
                type: SAVE_ORDER,
                confirm: true
            })
        } catch (e) {
            console.log(e.message)
        }
    }
}
export const saveOrder = (usuario,reserva) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URI_ORDER_API}/create`,{
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({
                    usuario:usuario,
                    reserva
                })
            })

            const result = await response.json();
            console.log(result);
            reserva.map(function(x) {
                saveDetailOrder(x,result)
             });
            dispatch({
                type: SAVE_ORDER,
                confirm: true
            })
        } catch (e) {
            console.log(e.message)
        }
    }
}