import { ActionTypes } from "../constants/action-types.js";

const INITIAL_STATE = {
  products: [{
    id: 1,
    title: 'Tv',
    category: 'Accesories'
  }
],
};

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
