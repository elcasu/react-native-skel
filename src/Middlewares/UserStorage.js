import { AsyncStorage } from 'react-native'
import { types } from '../Actions/User'

export default class {
  constructor(key) {
    this.key = key
  }

  InitialState() {
    return () => new Promise(resolve => {
      AsyncStorage.getItem(this.key)
        .then(user => {
          try {
            const parsedState = JSON.parse(user)
            resolve({ 
              User: parsedState || { signedIn: false }
            })
          } catch (e) {
            resolve({ 
              User: {
                signedIn: false
              }
            })
          }
        })
    })
  }

  Middleware() {
    return store => next => action => {
      if (
        action.type === types.AUTHENTICATE_INTENT_RESOLVED
        // action.type === types.DO_REGISTER_RESOLVED ||
        // action.type === types.DO_UPDATE_RESOLVED || <-- TODO: keep this in mind! ;-)
        // action.type === types.GET_USER_RESOLVED
      ) {
        const result = next(action)
        const user = store.getState().User
        AsyncStorage.setItem(this.key, JSON.stringify(user))
        return result
      }
      return next(action)
    }
  }
}
