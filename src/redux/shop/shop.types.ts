import { AnyAction } from "redux";

export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START'
export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS'
export const FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE'

interface FetchCollectionStart extends AnyAction {
  type: typeof FETCH_COLLECTIONS_START;
  payload: any;
}

interface FetchCollectionSuccess extends AnyAction {
  type: typeof FETCH_COLLECTIONS_SUCCESS;
  payload: any;
}

interface FetchCollectionFailure extends AnyAction {
  type: typeof FETCH_COLLECTIONS_FAILURE;
  payload: any;
}


export type ShopActionTypes = 
  | FetchCollectionStart
  | FetchCollectionSuccess
  | FetchCollectionFailure