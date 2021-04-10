export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN'

interface ToggleCartHidden {
  type: typeof TOGGLE_CART_HIDDEN;
  payload: any;
}

export type CartActionType = 
  | ToggleCartHidden;