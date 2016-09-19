import { compose, applyMiddleware, createStore } from 'redux'
import { rootReducer } from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

export const configureStore = (() => {
  const store = createStore(rootReducer,
      compose(
      applyMiddleware(createLogger()),
      applyMiddleware(thunk),
    )
  )

  // Enable Webpack hot module replacement for reducers

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').rootReducer
      store.replaceReducer(nextRootReducer)
    });
  }

  return store
})
