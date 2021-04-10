import {ADD_ITEM, TOGGLE_CART_HIDDEN} from './cart.types'

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
})


export const addItem = (item:any) => ({
  type: ADD_ITEM,
  payload: item
})