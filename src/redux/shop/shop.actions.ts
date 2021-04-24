import { UPDATE_COLLECTIONS } from "./shop.types"


export const updateCollections = (collectionsMap:any) => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap
})


