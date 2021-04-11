import { AnyAction } from 'redux'
import {SET_CURRENT_USER} from './user.types'

const INITIAL_STATE:any = {
  currentUser: null,
}

const userReducer = (state = INITIAL_STATE, action: AnyAction) =>{
  switch(action.type)  {
    case SET_CURRENT_USER:
      return {
        ...state, 
        currentUser: action.payload
      }
    default:
      return state
  }
}

export default userReducer