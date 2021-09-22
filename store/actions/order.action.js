import {URI_ORDER_API} from '../../constanst/Database'
export const GET_ORDERS = 'GET_ORDERS';

export const getOrders = (email) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URI_ORDER_API}/get_orders`,{
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({
                    email:email
                })
            })

            const result = await response.json();
            console.log(result);
            dispatch({
                type: GET_ORDERS,
                orders : result
            })
        } catch (e) {
            console.log(e.message)
        }
    }
}