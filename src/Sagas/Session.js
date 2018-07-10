import { AsyncStorage } from 'react-native'
import { ErrorHandler } from '../API/utils'
import { call, put, takeLatest } from 'redux-saga/effects'
import { actions, types } from '../Actions/User'

/**
 * Restore user session
 */
function* restoreSessionHandler() {
  try {
    const user = yield call(AsyncStorage.getItem, 'user')
    yield put(actions.RestoreSessionResolved(JSON.parse(user)))
  } catch (e) {
    const response = yield ErrorHandler(e)
    yield put(actions.RestoreSessionRejected(response))
  }
}

/**
 * Remove user session (logout)
 */
function* removeSessionHandler() {
  try {
    yield call(AsyncStorage.removeItem, 'user')
    yield put(actions.RemoveSessionResolved())
  } catch (e) {
    const response = yield ErrorHandler(e)
    yield put(actions.RemoveSessionRejected(response))
  }
}

export default function*() {
  yield takeLatest(types.RESTORE_SESSION_INTENT, restoreSessionHandler)
  yield takeLatest(types.REMOVE_SESSION_INTENT, removeSessionHandler)
}
