import { AnyAction } from 'redux';
import { CartItemType } from '../../types/common.types';
import {ADD_ITEM, CLEAR_ITEM, REMOVE_ITEM, TOGGLE_CART_HIDDEN} from './cart.types'
import { addItemToCart, removeItemFromCart } from './cart.utils';

interface CartState {
  hidden:boolean
  cartItems: Array<CartItemType>
}


const INITIAL_STATE: CartState = {
  hidden: true, 
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE,  action: AnyAction) => {
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