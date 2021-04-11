import { CartItemType } from "../../types/common.types"

export const addItemToCart = (cartItems:Array<CartItemType>, cartItemToAdd:CartItemType) =>{
  const existingCartItem = cartItems.find((cartItem:CartItemType) => cartItem.id === cartItemToAdd.id)

  if(existingCartItem) {
    return cartItems.map((cartItem:CartItemType) => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 }: cartItem)
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems: Array<CartItemType>, cartItemToRemove: CartItemType) => {
  const existingCartItem = cartItems.find((cartItem:CartItemType) => cartItem.id === cartItemToRemove.id)

  if (existingCartItem && existingCartItem.quantity > 1){
    return cartItems.map((cartItem:CartItemType) => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1 }: cartItem)
  }
  else{
    return cartItems.filter((cartItem:CartItemType) => cartItem.id !== cartItemToRemove.id)
  }
}