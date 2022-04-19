import axios from "axios"
export const listWorkouts = (keyword="") => async(dispatch) => {
    try {
        dispatch({ type: 'WORKOUT_LIST_REQUEST'})

        const { data } = await axios.get(`/api/workouts?keyword=${keyword}`)

        dispatch({
            type: 'WORKOUT_LIST_SUCCESS',
            payload: data
        })

        localStorage.setItem('workouts', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: 'WORKOUT_LIST_FAIL',
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message
        })
    }
}

export const singleWorkout = (id) => async(dispatch) => {
    try {
        dispatch({ type: 'WORKOUT_REQUEST'})

        const { data } = await axios.get(`/api/workouts/${id}`)

        dispatch({
            type: 'WORKOUT_SUCCESS',
            payload: data
        })

    } catch (error) {
        dispatch({
            type: 'WORKOUT_FAIL',
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message
        })
    }
}


export const signForWorkout = (id, name, email, phoneNumber) => async(dispatch) => {
    try {
        dispatch({ type: 'WORKOUT_SIGN_FOR_REQUEST'})

         const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }


        const { data } = await axios.post(
            `/api/workouts/${id}`,
            {name, email, phoneNumber},
            config,
            )

        dispatch({
            type: 'WORKOUT_SIGN_FOR_SUCCESS',
            payload: data
        })

    } catch (error) {
        dispatch({
            type: 'WORKOUT_SIGN_FOR_FAIL',
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message
        })
    }
}

export const updateWorkout = (id, date, duration, equipment, description, revenuePerClient, currentClients, maxClients) => async(dispatch, getState) => {
    try {
        dispatch({ type: 'WORKOUT_UPDATE_REQUEST'})

        const {
        adminLogin: { adminInfo },
        } = getState()

         const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${adminInfo.token}`,
            }
        }


        const { data } = await axios.put(
            `/api/workouts/${id}`,
            { date, duration, equipment, description, revenuePerClient, currentClients, maxClients},
            config,
            )

        dispatch({
            type: 'WORKOUT_UPDATE_SUCCESS',
            payload: data
        })

    } catch (error) {
        dispatch({
            type: 'WORKOUT_UPDATE_FAIL',
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message
        })
    }
}



export const createWorkout = (date, duration, equipment, description, revenuePerClient, currentClients, maxClients) => async(dispatch, getState) => {
    try {
        dispatch({ type: 'WORKOUT_CREATE_REQUEST'})

        const {
        adminLogin: { adminInfo },
        } = getState()

         const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${adminInfo.token}`,
            }
        }


        const { data } = await axios.post(
            `/api/workouts`,
            { date, duration, equipment, description, revenuePerClient, currentClients, maxClients},
            config,
            )

        dispatch({
            type: 'WORKOUT_CREATE_SUCCESS',
            payload: data
        })

    } catch (error) {
        dispatch({
            type: 'WORKOUT_CREATE_FAIL',
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message
        })
    }
}

export const deleteWorkout = (id) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: 'WORKOUT_DELETE_REQUEST',
    })

    const {
        adminLogin: { adminInfo },
        } = getState()

         const config = {
            headers: {
                Authorization: `Bearer ${adminInfo.token}`,
            }
        }

   await axios.delete(
      `/api/workouts/${id}`,
      config
    )

    dispatch({
      type: 'WORKOUT_DELETE_SUCCESS',
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: 'WORKOUT_DELETE_FAIL',
      payload: message,
    })
  }
}