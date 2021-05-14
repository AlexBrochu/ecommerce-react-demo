import {CHECK_USER_SESSION, EMAIL_SIGN_IN_START, GOOGLE_SIGN_IN_START, SET_CURRENT_USER, SIGN_IN_FAILURE, SIGN_IN_SUCCESS, SIGN_OUT_FAILURE, SIGN_OUT_START, SIGN_OUT_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_START, SIGN_UP_SUCCESS} from './user.types'

export const setCurrentUser = (user: any) => ({
  type: SET_CURRENT_USER,
  payload: user
})

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START
})

export const signInSuccess = (user: any) => ({
  type: SIGN_IN_SUCCESS,
  payload: user
})

export const signInFailure = (error: any) => ({
  type: SIGN_IN_FAILURE,
  payload: error
})

export const emailSignInStart = (emailAndPassword:any) => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
})

export const checkUserSession = () =>({
  type: CHECK_USER_SESSION
})

export const signOutStart = () =>({
  type: SIGN_OUT_START
})


export const signOutSuccess = () =>({
  type: SIGN_OUT_SUCCESS
})


export const signOutFailure = (error: any) =>({
  type: SIGN_OUT_FAILURE,
  payload: error
})

export const signUpStart = (account:any) =>({
  type: SIGN_UP_START,
  payload: account
})


export const signUpSuccess = (user:any) =>({
  type: SIGN_UP_SUCCESS,
  payload: user
})


export const signUpFailure = (error: any) =>({
  type: SIGN_UP_FAILURE,
  payload: error
})

