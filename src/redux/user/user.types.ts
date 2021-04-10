export const SET_CURRENT_USER = 'SET_CURRENT_USER'

interface SetCurrentUser {
  type: typeof SET_CURRENT_USER;
  payload: any;
}

export type UserActionType = 
  | SetCurrentUser;