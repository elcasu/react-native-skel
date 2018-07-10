import { combineReducers } from 'redux'
import * as asyncInitialState from 'redux-async-initial-state'

import User from './User'

export default asyncInitialState.outerReducer(combineReducers({
  User,
  asyncInitialState: asyncInitialState.innerReducer
}))
