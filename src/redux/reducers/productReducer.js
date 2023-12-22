import { ActionTypes } from "../constants/action-types.js";

const INITIAL_STATE = {
  products: [],
};

export const productReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {...state, products: payload};
    default:
      return state;
  }
};
