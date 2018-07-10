import { actions as userActions } from '../../Actions/User'
import { put } from 'redux-saga/effects'

/**
 * Common HTTP Methods used
 */
export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  HEAD: 'HEAD'
}

/**
 * Generate the headers needed for the requests
 * @param {String} token - Token used on Authentication
 */
export const HeaderFactory = token => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  if (token) headers.append('Authorization', `Bearer ${token}`)
  return headers
}

export const FileHeaderFactory = type => {
  const headers = new Headers()
  if (type) {
    headers.append('Content-Type', type)
  }
  return headers
}

/**
 * Handle Gracefully an HTTP Error
 * @param {Error} error - Fetch Error
 */
export function* ErrorHandler(error) {
  // check for unauthorized responses (i.e. expired token)
  if (error && (error.status === 401 || error.status === 403)) {
    yield put(userActions.Logout())
    return {
      message: 'Your session has expired'
    }
  }
  const genericResponse = { message: 'Something went wrong, try again later' }
  if (error && error.json) {
    try {
      const data = yield error.json()
      return data
    } catch (e) {
      return genericResponse
    }
  } else return genericResponse
}
