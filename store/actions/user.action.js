export const LOGIN_USER = 'LOGIN_USER';
export const UBICAR = 'UBICAR';

export const loginUser = (user) => ({
    type : LOGIN_USER,
    user : user,
})
export const buscarEventos = (lat,lng) => {
    return async dispatch => {
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDJE4PtmaQqOTFG7KNTsuV8BgOyUuyupuI`,{
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json'
                }
            })
            console.log(lat)
            console.log(lng)
            const result = await response.json();
            const results = result.results[0].formatted_address
            console.log(results)
                
            dispatch({
                type: UBICAR,
                country:'PE'
            })
        } catch (e) {
            console.log(e.message)
        }
    }
}