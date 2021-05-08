import { takeLatest, put, all, call } from 'redux-saga/effects'
import { CHECK_USER_SESSION, EMAIL_SIGN_IN_START, GOOGLE_SIGN_IN_START, SIGN_OUT_START, SIGN_UP_START } from './user.types'

import {auth, googleProvider, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils'
import { emailSignInStart, signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess } from './user.actions';
import {DocumentReference, DocumentData} from '@firebase/firestore-types'

export function* getSnapshotFromUserAuth(userAuth:any): Generator<
any, void, any
> {
  try {
    const userRef: DocumentReference<DocumentData> = yield call(createUserProfileDocument, userAuth)

    const userSnapshot: any = yield userRef.get()
    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
  } catch (error) {
    yield put(signInFailure(error))
  }
}

// How to type with sagas https://github.com/redux-saga/redux-saga/issues/2015
export function* signInWithGoogle(): Generator<
any, void, any
> {
  try {
    const {user}: any = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle)
}

// How to type with sagas https://github.com/redux-saga/redux-saga/issues/2015
export function* signInWithEmail({payload: {email, password}}: any): Generator<
any, void, any
> {
  try {
    const {user}: any = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* isUserAuthenticated(): Generator<
any, void, any
> {
  try {
    const userAuth = yield getCurrentUser()
    if(!userAuth) return
    yield getSnapshotFromUserAuth(userAuth)
  } catch (error) {
    yield  put(signInFailure(error))
  }
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOut(): Generator<
any, void, any
> {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error))
  }
}

export function* onUserSignOut() {
  yield takeLatest(SIGN_OUT_START, signOut)
}

export function* signUp({payload: {email, password, displayName}}: any): Generator<
any, void, any
> {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(
      email,
      password
    );
    yield createUserProfileDocument(user, { displayName });
    yield put(signUpSuccess(user))
    yield put(emailSignInStart({email, password}))
  } catch (error) {
    yield put(signUpFailure(error))
  }
}

export function* onUserSignUp() {
  yield takeLatest(SIGN_UP_START, signUp)
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSession), call(onUserSignOut), call(onUserSignUp)])
}