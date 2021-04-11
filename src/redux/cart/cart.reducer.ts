import {ADD_ITEM, CartActionType, CLEAR_ITEM, REMOVE_ITEM, TOGGLE_CART_HIDDEN} from './cart.types'
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true, 
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action:CartActionType) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case ADD_ITEM:
      return {
        ...state, 
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case REMOVE_ITEM:
      return {
        ...state, 
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    case CLEAR_ITEM:
      return {
        ...state, 
        cartItems: state.cartItems.filter((cartItem:any) => cartItem.id !== action.payload.id)
      }
    default:
      return state
  }
}

export default cartReducer