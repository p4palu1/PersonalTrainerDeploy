export const adminLoginReducer = (state = {  }, action) => {
  switch (action.type) {
    case 'ADMIN_LOGIN_REQUEST':
      return { loading: true }
    case 'ADMIN_LOGIN_SUCCESS':
      return { loading: false, adminInfo : action.payload }
    case 'ADMIN_LOGIN_FAIL':
      return { loading: false, error: action.payload }
    case 'ADMIN_LOGOUT':
        return {}
      default:
      return state
  }
}

export const adminDetailsReducer = (state = { admin: {} }, action) => {
  switch (action.type) {
    case 'ADMIN_DETAILS_REQUEST':
      return { ...state, loading: true }
    case 'ADMIN_DETAILS_SUCCESS':
      return { loading: false, admin: action.payload }
    case 'ADMIN_DETAILS_FAIL':
      return { loading: false, error: action.payload }
    case 'ADMIN_DETAILS_RESET':
      return  { admin: {} }
    default:
      return state
  }
}


export const adminUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADMIN_UPDATE_REQUEST':
      return { loading: true }
    case 'ADMIN_UPDATE_SUCCESS':
      return { loading: false, success: true }
    case 'ADMIN_UPDATE_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}