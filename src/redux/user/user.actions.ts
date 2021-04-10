import {SET_CURRENT_USER} from './user.types'

export const setCurrentUser = (user: any) => ({
  type: SET_CURRENT_USER,
  payload: user
})