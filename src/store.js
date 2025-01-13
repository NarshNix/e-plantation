// store.js
import { createStore } from "redux";

const initialState = {
  cart: [], // array of products in cart
  itemCount: 0, // total item count
  totalCost: 0, // total cost of items in cart
};

const functionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProductIndex = state.cart.findIndex(
        (product) => product.name === action.payload.name
      );
      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += 1;
        return {
          ...state,
          cart: updatedCart,
          itemCount: state.itemCount + 1,
          totalCost: state.totalCost + parseFloat(action.payload.cost.slice(1)),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          itemCount: state.itemCount + 1,
          totalCost: state.totalCost + parseFloat(action.payload.cost.slice(1)),
        };
      }

    case "REMOVE_ITEM":
      const filteredCart = state.cart.filter(
        (product) => product.name !== action.payload.name
      );
      return {
        ...state,
        cart: filteredCart,
        itemCount: state.itemCount - 1,
        totalCost:
          state.totalCost -
          parseFloat(action.payload.cost.slice(1)) * action.payload.quantity,
      };

    case "UPDATE_QUANTITY":
      const updatedCart = state.cart.map((product) => {
        if (product.name === action.payload.name) {
          return { ...product, quantity: action.payload.quantity };
        }
        return product;
      });
      let newItemCount = updatedCart.reduce(
        (sum, product) => sum + product.quantity,
        0
      );
      let newTotalCost = updatedCart.reduce(
        (sum, product) =>
          sum + parseFloat(product.cost.slice(1)) * product.quantity,
        0
      );
      return {
        ...state,
        cart: updatedCart,
        itemCount: newItemCount,
        totalCost: newTotalCost,
      };

    default:
      return state;
  }
};

const store = createStore(functionReducer);

export default store;
