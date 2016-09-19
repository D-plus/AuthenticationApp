import { CHANGE_AUTH } from '../actions/types'

export const auth = (state, action) => {
  switch(action.type) {
    case CHANGE_AUTH:
      return action.data

    default:
      return !!state
  }
}
