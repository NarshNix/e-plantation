import { createStore } from "redux";

const functionReducer = (state = { cart: [], item: 0 }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cart: [...state.cart, action.payload],
      };
    case "ADD_ITEM":
      return { ...state, item: state.item + 1 };
    case "REMOVE_ITEM":
      return { ...state, item: state.item - 1 };
    case "ADD_BY_VALUE":
      return { ...state, item: state.item + action.payload };
    default:
      return state;
  }
};

const store = createStore(functionReducer);

export default store;
