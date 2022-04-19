export const workoutListReducer = (state = { workouts: []}, action ) => {
    switch(action.type) {
        case 'WORKOUT_LIST_REQUEST':
            return { loading: true }
        case 'WORKOUT_LIST_SUCCESS':
            return { loading: false, workouts: action.payload}
        case 'WORKOUT_LIST_FAIL':
            return { loading: false, error: action.payload}
        default: 
            return state
    }
}

export const workoutReducer = (state = { workout: { clients: [] } }, action ) => {
    switch(action.type) {
        case 'WORKOUT_REQUEST':
            return { ...state, loading: true }
        case 'WORKOUT_SUCCESS':
            return { loading: false, workout: action.payload}
        case 'WORKOUT_FAIL':
            return { loading: false, error: action.payload}
        default: 
            return state
    }
}

export const signForWorkoutReducer = (state = { }, action ) => {
    switch(action.type) {
        case 'WORKOUT_SIGN_FOR_REQUEST':
            return { loading: true }
        case 'WORKOUT_SIGN_FOR_SUCCESS':
            return { loading: false, success: true}
        case 'WORKOUT_SIGN_FOR_FAIL':
            return { loading: false, error: action.payload}
        default: 
            return {}
    }
}

export const updateWorkoutReducer = (state = { }, action ) => {
    switch(action.type) {
        case 'WORKOUT_UPDATE_REQUEST':
            return { loading: true }
        case 'WORKOUT_UPDATE_SUCCESS':
            return { loading: false, success: true}
        case 'WORKOUT_UPDATE_FAIL':
            return { loading: false, error: action.payload}
        default: 
            return {}
    }
}


export const workoutCreateReducer = (state = {} , action) => {
  switch (action.type) {
    case 'WORKOUT_CREATE_REQUEST':
      return { loading: true }
    case 'WORKOUT_CREATE_SUCCESS':
      return { loading: false, success: true, workout: action.payload }
    case 'WORKOUT_CREATE_FAIL':
      return { loading: false, error: action.payload }
    case 'WORKOUT_CREATE_RESET':
      return {}
    default:
      return state
  }
}


export const workoutDeleteReducer = (state = {} , action) => {
  switch (action.type) {
    case 'WORKOUT_DELETE_REQUEST':
      return { loading: true }
    case 'WORKOUT_DELETE_SUCCESS':
      return { loading: false, success: true }
    case 'WORKOUT_DELETE_FAIL':
      return { loading: false, error: action.payload }
    case 'WORKOUT_DELETE_RESET':
      return {}
    default:
      return state
  }
}