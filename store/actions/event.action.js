export const SELECT_EVENT = 'SELECT_EVENT';
export const FILTER_EVENTS = 'FILTER_EVENTS';

export const filterEvents = (idCategory) => ({
    type : FILTER_EVENTS,
    categoryID : idCategory,
})

export const selectEvent = (idEvent) => ({
    type : SELECT_EVENT,
    eventID : idEvent,
})