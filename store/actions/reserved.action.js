import {URI_ORDER_API} from '../../constanst/Database'
import { selectTicket,deleteTicket,insertTicket,deleteTicketsEmail } from '../../db';

export const ADD_TICKET = 'ADD_TICKET';
export const REMOVE_TICKET = 'REMOVE_TICKET';
export const SAVE_ORDER = 'SAVE_ORDER';
export const LOAD_TICKET = 'LOAD_TICKET';

/*
export const addTicket = (ticket) => ({
    type : ADD_TICKET,
    ticket : ticket,
})*/
export const addTicket = (ticket) =>{
    return async dispatch => {

    try {
        const result = await insertTicket(ticket[0].email,ticket[0].event,ticket[0].quantity)
        if (result.insertId!=undefined) {
            const result1 = await selectTicket(ticket[0].email);
            dispatch({ type: ADD_TICKET, list: result1.rows._array })
        }
    } catch (error) {
        console.log(error.message)
    } 
    }
}
export const getTicketsReserved = (email) =>{
    return async dispatch => {
        try {
            const result = await selectTicket(email);
            dispatch({ type: LOAD_TICKET, list: result.rows._array })
            console.log(result.rows._array)
        } catch (error) {
            throw error;
        }
    }
}
/*
export const removeTicket = (id) => ({ 
    type : REMOVE_TICKET,
    id : id,
})*/
export const removeTicket = (id,email) => {
    return async dispatch => {
        try {
            const result = await deleteTicket(id);
            if(result.rowsAffected>0) {
                const result1 = await selectTicket(email);
                dispatch({ type: REMOVE_TICKET, list: result1.rows._array })
            }
            console.log(result);
        } catch (error) {
            throw error;
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
            const result1 = await deleteTicketsEmail(usuario);
            if(result1.rowsAffected>0) {
                const result2 = await selectTicket(usuario);
                
            dispatch({
                type: SAVE_ORDER,
                list: result2.rows._array
            })
            }
        } catch (e) {
            console.log(e.message)
        }
    }
}