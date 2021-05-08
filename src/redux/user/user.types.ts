export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START'
export const EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE'
export const CHECK_USER_SESSION = 'CHECK_USER_SESSION'
export const SIGN_OUT_START = 'SIGN_OUT_START'
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS'
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE'
export const SIGN_UP_START = 'SIGN_UP_START'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'


interface SetCurrentUser {
  type: typeof SET_CURRENT_USER;
  payload: any;
}

interface SetGoogleSignInStart {
  type: typeof GOOGLE_SIGN_IN_START;
  payload: any;
}

interface SetGoogleSignInSuccess {
  type: typeof SIGN_IN_SUCCESS;
  payload: any;
}

interface SetGoogleSignInFailure {
  type: typeof SIGN_IN_FAILURE;
  payload: any;
}

interface SetEmailSignInStart {
  type: typeof EMAIL_SIGN_IN_START;
  payload: any;
}

interface SetEmailSignInSuccess {
  type: typeof SIGN_IN_SUCCESS;
  payload: any;
}

interface SetEmailSignInFailure {
  type: typeof SIGN_IN_FAILURE;
  payload: any;
}

interface CheckUserSession {
  type: typeof CHECK_USER_SESSION;
}

interface SignOutStart {
  type: typeof SIGN_OUT_START;
}

interface SignOutSuccess {
  type: typeof SIGN_OUT_SUCCESS;
}

interface SignOutFailure {
  type: typeof SIGN_OUT_FAILURE;
}

interface SignUpStart {
  type: typeof SIGN_UP_START;
}

interface SignUpSuccess {
  type: typeof SIGN_UP_SUCCESS;
}

interface SignUpFailure {
  type: typeof SIGN_UP_FAILURE;
}


export type UserActionType = 
  | SetCurrentUser
  | SetGoogleSignInStart
  | SetGoogleSignInSuccess
  | SetGoogleSignInFailure
  | SetEmailSignInStart
  | SetEmailSignInSuccess
  | SetEmailSignInFailure
  | CheckUserSession
  | SignOutStart
  | SignOutSuccess
  | SignOutFailure
  | SignUpStart
  | SignUpSuccess
  | SignUpFailure;