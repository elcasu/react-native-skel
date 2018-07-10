import { Alert } from 'react-native'
import { Authenticate } from '../API/User'
import { call, put, takeLatest } from 'redux-saga/effects'
import { actions, types } from '../Actions/User'
import NavigationService from '../Components/Navigator/NavigationService'

/**
 * Handles Login intent
 * @param {object} action - Action Object 
 */
function* loginHandler({ data }) {
  try {
    const res = yield call(Authenticate, data.username, data.password)
    // Check if res.status ~ 200
    if (res.ok) {
      yield put(actions.AuthenticateResolved(res, yield res.json()))
      yield NavigationService.navigate('Home')
    } else throw res
  } catch (e) {
    Alert.alert(
      'Invalid credentials',
      'Invalid email or password',
      [
        { text: 'OK' }
      ]
    )
  }
}

export default function*() {
  yield takeLatest(types.AUTHENTICATE_INTENT, loginHandler)
}
