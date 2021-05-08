import { takeLatest, call, put, all } from 'redux-saga/effects'
import { SIGN_OUT_SUCCESS } from '../user/user.types';
import { clearCart } from './cart.action';

export function* clearCartOnSignOut(): Generator<
any
> {
  yield put(clearCart())
}

export function* onSignOutSuccess(){
  // takeEvery listen on an action and trigger a function generator
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas() {
  yield(all([call(onSignOutSuccess)]))
}