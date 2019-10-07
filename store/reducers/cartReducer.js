import * as actionTypes from "../actions/types";
const initialState = {
  items: [
    {
      drink: "Latte",
      option: "Small",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ]
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const newitem = action.payload;
      const available = state.items.filter(item => {
        return (
          item.drink === action.payload.drink &&
          item.option === action.payload.option
        );
      });
      if (available.length) {
        available[0].quantity += 1;
        newItemsArray = state.items.filter(item => {
          return (
            item.drink !== action.payload.drink ||
            item.option !== action.payload.option
          );
        });
        return {
          items: newItemsArray.concat(available)
        };
      } else {
        return {
          items: state.items.concat([newitem])
        };
      }
    case actionTypes.REMOVE_ITEM:
      return {
        items: state.items.filter(item => {
          return item !== action.payload;
        })
      };
    case actionTypes.CHECKOUT:
      return {
        items: []
      };
    default:
      return state;
  }
};

export default cartReducer;
