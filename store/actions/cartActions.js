import * as actionTypes from "./types";

export const addItemToCart = (drink, option, quantity) => ({
  type: actionTypes.ADD_ITEM,
  payload: { drink: drink, option: option, quantity: quantity }
});

export const removeItemFromCart = item => ({
  type: actionTypes.REMOVE_ITEM,
  payload: item
});

export const checkoutCart = () => ({
  type: actionTypes.CHECKOUT
});
