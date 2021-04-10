export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN'
export const ADD_ITEM = 'ADD_ITEM'

interface ToggleCartHidden {
  type: typeof TOGGLE_CART_HIDDEN;
  payload: any;
}

interface AddItem {
  type: typeof ADD_ITEM;
  payload: any;
}

export type CartActionType = 
  | ToggleCartHidden
  | AddItem;