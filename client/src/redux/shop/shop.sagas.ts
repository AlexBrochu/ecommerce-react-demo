import { takeLatest, call, put, all } from 'redux-saga/effects'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions';

import { FETCH_COLLECTIONS_START } from './shop.types'


export function* fetchCollectionsAsync(): Generator<
any
> {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot: any = yield collectionRef.get();
    // call calls a function
    // first param function, second parm
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)

    // put dispathc an action
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
  
}

export function* fetchCollectionsStart(){
  // takeEvery listen on an action and trigger a function generator
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}