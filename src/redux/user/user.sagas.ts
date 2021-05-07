import { takeLatest, put, all, call } from 'redux-saga/effects'
import { GOOGLE_SIGN_IN_START, GOOGLE_SIGN_IN_SUCCESS } from './user.types'

import {auth, googleProvider, createUserProfileDocument} from '../../firebase/firebase.utils'
import { googleSignInFailure, googleSignInSuccess } from './user.actions';
import {DocumentReference, DocumentData} from '@firebase/firestore-types'
// How to type with sagas https://github.com/redux-saga/redux-saga/issues/2015
export function* signInWithGoogle(): Generator<
any, void, any
> {
  try {
    const {user}: any = yield auth.signInWithPopup(googleProvider);
    const userRef: DocumentReference<DocumentData> = yield call(createUserProfileDocument, user)

    const userSnapshot: any = yield userRef.get()
    yield put(googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
  } catch (error) {
    yield put(googleSignInFailure(error))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)])
}