import { AnyAction } from "redux";

export const UPDATE_COLLECTIONS = 'UPDATE_COLLECTIONS'

interface UpdateCollections extends AnyAction {
  type: typeof UPDATE_COLLECTIONS;
  payload: any;
}


export type ShopActionTypes = 
  | UpdateCollections