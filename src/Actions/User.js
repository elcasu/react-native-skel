export const types = {
  AUTHENTICATE_INTENT: 'AUTHENTICATE_INTENT',
  AUTHENTICATE_INTENT_RESOLVED: 'AUTHENTICATE_INTENT_RESOLVED',
  AUTHENTICATE_INTENT_REJECTED: 'AUTHENTICATE_INTENT_REJECTED',
  RESTORE_SESSION_INTENT: 'RESTORE_SESSION_INTENT',
  RESTORE_SESSION_INTENT_RESOLVED: 'RESTORE_SESSION_INTENT_RESOLVED',
  RESTORE_SESSION_REJECTED: 'RESTORE_SESSION_REJECTED',
  REMOVE_SESSION_INTENT: 'REMOVE_SESSION_INTENT',
  REMOVE_SESSION_INTENT_RESOLVED: 'REMOVE_SESSION_INTENT_RESOLVED',
  REMOVE_SESSION_REJECTED: 'REMOVE_SESSION_REJECTED'
}

export const actions = {
  /**
   * Generates an Authentication Action
   * @param {string} username - Username to log into the application
   * @param {string} password - Password to log into the application
   */
  Authenticate(username, password) {
    return {
      type: types.AUTHENTICATE_INTENT,
      data: { username, password }
    }
  },

  /**
   * Generates an Authentication Resolved Action
   * @param {object} response - Fetch API response
   * @param {object} payload - Fetch API Payload encoded as JSON
   */
  AuthenticateResolved(response, payload) {
    return {
      type: types.AUTHENTICATE_INTENT_RESOLVED,
      response,
      payload
    }
  },

  /**
   * Generates an Authentication Rejected Action
   * @param {object} error - Fetch API response
   * @param {object} payload - Fetch API Payload encoded as JSON
   */
  AuthenticateRejected(error, payload) {
    return {
      type: types.AUTHENTICATE_INTENT_REJECTED,
      error,
      payload
    }
  },

  RestoreSession() {
    return {
      type: types.RESTORE_SESSION_INTENT
    }
  },

  RestoreSessionResolved(response) {
    return {
      type: types.RESTORE_SESSION_INTENT_RESOLVED,
      response
    }
  },

  RestoreSessionRejected(error) {
    return {
      type: types.RESTORE_SESSION_INTENT_REJECTED,
      error
    }
  },

  RemoveSession() {
    return {
      type: types.REMOVE_SESSION_INTENT
    }
  },

  RemoveSessionResolved() {
    return {
      type: types.REMOVE_SESSION_INTENT_RESOLVED
    }
  },

  RemoveSessionRejected(error) {
    return {
      type: types.REMOVE_SESSION_INTENT_REJECTED,
      error
    }
  }
}

export const selectors = {
  GetUser: state => state.User,
  GetToken: state => state.User.token
}
