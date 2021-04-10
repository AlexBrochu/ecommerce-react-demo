import {createSelector} from 'reselect'

const selectCart = (state:any) => state.cart

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems)

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems:any) => cartItems.reduce(
  (accumulatedQuantity: number, cartItem: any) =>
    accumulatedQuantity + cartItem.quantity,
  0
))