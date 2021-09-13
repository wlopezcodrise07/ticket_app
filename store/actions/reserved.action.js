export const ADD_TICKET = 'ADD_TICKET';
export const REMOVE_TICKET = 'REMOVE_TICKET';

export const addTicket = (ticket) => ({
    type : ADD_TICKET,
    ticket : ticket,
})
export const removeTicket = (id) => ({
    type : REMOVE_TICKET,
    id : id,
})
