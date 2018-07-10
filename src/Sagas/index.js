import { fork, all } from 'redux-saga/effects'
import Login from './Login'
import Session from './Session'

export default function*() {
  yield all([
    fork(Login),
    fork(Session)
  ])
}
