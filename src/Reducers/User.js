import { types } from '../Actions/User'

const initialState = {
  sessionLoaded: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTHENTICATE_INTENT:
      return {
        ...state,
        processing: true,
        signedIn: false
      }

    case types.AUTHENTICATE_INTENT_RESOLVED:
      return {
        ...state,
        ...action.payload.user,
        token: action.payload.token,
        processing: false,
        signedIn: true
      }

    case types.AUTHENTICATE_INTENT_REJECTED:
      return {
        ...state,
        processing: false,
        signedIn: false
      }

    case types.RESTORE_SESSION_INTENT:
      return {
        ...state,
        sessionLoaded: false
      }
    case types.RESTORE_SESSION_INTENT_RESOLVED: {
      return {
        ...state,
        ...action.response,
        sessionLoaded: true
      }
    }

    case types.REMOVE_SESSION_INTENT_RESOLVED: {
      return {
        signedIn: false,
        sessionLoaded: true
      }
    }

    default:
      return state
  }
}
