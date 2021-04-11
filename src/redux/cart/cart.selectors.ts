
import {createSelector} from 'reselect'
import { CartItemType } from '../../types/common.types'
import { State } from '../store'

const selectCart = (state:State) => state.cart

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems)

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden)

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems:Array<CartItemType>) => cartItems.reduce(
  (accumulatedQuantity: number, cartItem: CartItemType) =>
    accumulatedQuantity + cartItem.quantity,
  0
))

export const selectCartTotal = createSelector([selectCartItems], (cartItems:Array<CartItemType>) => cartItems.reduce(
  (accumulatedQuantity: number, cartItem: CartItemType) =>
    accumulatedQuantity + cartItem.quantity * cartItem.price,
  0
))