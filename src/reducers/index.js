import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { auth } from './auth'

export const rootReducer = combineReducers({
  routing,
  auth
})
