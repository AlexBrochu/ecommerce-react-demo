import {ADD_ITEM, TOGGLE_CART_HIDDEN, REMOVE_ITEM, CLEAR_ITEM, CLEAR_CART} from './cart.types'

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
})

export const addItem = (item:any) => ({
  type: ADD_ITEM,
  payload: item
})


export const removeItem = (item: any) => ({
  type: REMOVE_ITEM,
  payload: item
})

export const clearItem = (item: any) => ({
  type: CLEAR_ITEM,
  payload: item
})

export const clearCart = () => ({
  type: CLEAR_CART
})

