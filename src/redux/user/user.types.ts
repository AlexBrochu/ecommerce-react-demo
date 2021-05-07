export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START'
export const GOOGLE_SIGN_IN_SUCCESS = 'GOOGLE_SIGN_IN_SUCCESS'
export const GOOGLE_SIGN_IN_FAILURE = 'GOOGLE_SIGN_IN_FAILURE'
export const EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START'
export const EMAIL_SIGN_IN_SUCCESS = 'EMAIL_SIGN_IN_SUCCESS'
export const EMAIL_SIGN_IN_FAILURE = 'EMAIL_SIGN_IN_FAILURE'


interface SetCurrentUser {
  type: typeof SET_CURRENT_USER;
  payload: any;
}

interface SetGoogleSignInStart {
  type: typeof GOOGLE_SIGN_IN_START;
  payload: any;
}

interface SetGoogleSignInSuccess {
  type: typeof GOOGLE_SIGN_IN_SUCCESS;
  payload: any;
}

interface SetGoogleSignInFailure {
  type: typeof GOOGLE_SIGN_IN_FAILURE;
  payload: any;
}

interface SetEmailSignInStart {
  type: typeof EMAIL_SIGN_IN_START;
  payload: any;
}

interface SetEmailSignInSuccess {
  type: typeof EMAIL_SIGN_IN_SUCCESS;
  payload: any;
}

interface SetEmailSignInFailure {
  type: typeof EMAIL_SIGN_IN_FAILURE;
  payload: any;
}


export type UserActionType = 
  | SetCurrentUser
  | SetGoogleSignInStart
  | SetGoogleSignInSuccess
  | SetGoogleSignInFailure
  | SetEmailSignInStart
  | SetEmailSignInSuccess
  | SetEmailSignInFailure;