import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { FETCH_COLLECTIONS_FAILURE, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS } from "./shop.types"


export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (collectionsMap:any) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsFailure = (errorMessage: any) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
  return (dispatch:Function) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart())

    collectionRef.get().then(snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot)
      dispatch(fetchCollectionsSuccess(collectionMap))
    }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
  }
}

