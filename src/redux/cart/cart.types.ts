export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN'
export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const CLEAR_ITEM = 'CLEAR_ITEM'

interface ToggleCartHidden {
  type: typeof TOGGLE_CART_HIDDEN;
  payload: any;
}

interface AddItem {
  type: typeof ADD_ITEM;
  payload: any;
}

interface RemoveItem {
  type: typeof REMOVE_ITEM;
  payload: any;
}

interface ClearItem {
  type: typeof CLEAR_ITEM;
  payload: any;
}


export type CartActionType = 
  | ToggleCartHidden
  | AddItem
  | RemoveItem
  | ClearItem;