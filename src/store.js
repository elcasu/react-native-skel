import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import Reducers from './Reducers'
import Saga from './Sagas'
import UserStorage from './Middlewares/UserStorage'
import logger from 'redux-logger'

const UserStorageMiddleware = new UserStorage('user')
const sagaMiddleware = createSagaMiddleware()
const composeEnhanced = window.__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
  compose

export default () => {
  const store = createStore(
    Reducers,
    composeEnhanced(
      applyMiddleware(
        sagaMiddleware,
        UserStorageMiddleware.Middleware(),
        logger
      )
    )
  )

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./Reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  sagaMiddleware.run(Saga)
  return store
}
