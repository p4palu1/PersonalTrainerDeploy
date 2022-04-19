import axios from "axios"

export const login = (email, password) => async(dispatch) => {
    try{
        dispatch({
            type: 'ADMIN_LOGIN_REQUEST'
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/admins/login', 
            { email, password},
            config
            )

        dispatch({
            type: 'ADMIN_LOGIN_SUCCESS',
            payload: data
        })

        localStorage.setItem('adminInfo', JSON.stringify(data) )
    } catch(error) {
         dispatch({
            type: 'ADMIN_LOGIN_FAIL', 
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        })
    }
}



export const getAdminDetails = (id) => async(dispatch, getState) => {
    try{
        dispatch({
            type: 'ADMIN_DETAILS_REQUEST'
        })

        const { adminLogin: { adminInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${adminInfo.token}`
            }
        }

        const { data } = await axios.get(
            `/api/admins/${id}`, 
            config
            )

        dispatch({
            type: 'ADMIN_DETAILS_SUCCESS',
            payload: data
        })
        
        } catch(error) {
         dispatch({
            type: 'ADMIN_DETAILS_FAIL', 
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        })
    }
}




export const logout = () => (dispatch) => {
    localStorage.removeItem('adminInfo')
    dispatch({ type: 'ADMIN_LOGOUT' })
    dispatch({ type: 'ADMIN_DETAILS_RESET'})
}


export const updateAdminProfile = (admin) => async(dispatch, getState) => {
    try{
        dispatch({
            type: 'ADMIN_UPDATE_REQUEST'
        })


        const { adminLogin: { adminInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${adminInfo.token}`
            }
        }

        const { data } = await axios.put(
            `/api/admins/profile`,
            admin, 
            config
            )

        dispatch({
            type: 'ADMIN_UPDATE_SUCCESS',
            payload: data
        })
        dispatch({
            type: 'ADMIN_LOGIN_SUCCESS',
            payload: data
        })

        localStorage.setItem('adminInfo', JSON.stringify(data))
        
        } catch(error) {
         dispatch({
            type: 'ADMIN_DETAILS_FAIL', 
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        })
    }
}
