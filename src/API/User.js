import { METHODS, HeaderFactory } from './utils'

/**
 * Authenticate into the application
 * @param {string} username - Username to log into the application
 * @param {string} password - Password to log into the application
 */
export const Authenticate = (username, password) => {
  return fetch(`${process.env.API_URL}/users/authenticate`, {
    method: METHODS.POST,
    headers: HeaderFactory(),
    body: JSON.stringify({ username, password })
  })
}
