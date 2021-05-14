import { AnyAction } from "redux";

export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN'
export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const CLEAR_ITEM = 'CLEAR_ITEM'
export const CLEAR_CART = 'CLEAR_CART'

interface ToggleCartHidden extends AnyAction {
  type: typeof TOGGLE_CART_HIDDEN;
  payload: any;
}

interface AddItem extends AnyAction {
  type: typeof ADD_ITEM;
  payload: any;
}

interface RemoveItem extends AnyAction {
  type: typeof REMOVE_ITEM;
  payload: any;
}

interface ClearItem extends AnyAction {
  type: typeof CLEAR_ITEM;
  payload: any;
}

interface ClearCart extends AnyAction {
  type: typeof CLEAR_CART;
  payload: any;
}



export type CartActionType = 
  | ToggleCartHidden
  | AddItem
  | RemoveItem
  | ClearItem
  | ClearCart;