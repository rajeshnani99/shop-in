const INITIAL_STATE = {
  carts: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    case "DELETE_CART_ITEM":
      const data = state.carts.filter((elem) => elem.id !== action.payload);
      return {
        ...state,
        carts: data,
      };
    default:
      return state;
  }
};
