export const ADD = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const DELETE = (id) => {
  return {
    type: "DELETE_CART_ITEM",
    payload: id ,
  };
};

