export const increasePrice = (baseAmount) => {
  return (dispatch) => {
    dispatch({
      type: "increase",
      payload: baseAmount,
    });
  };
};

export const decreasePrice = (baseAmount) => {
  return (dispatch) => {
    dispatch({
      type: "decrease ",
      payload: baseAmount,
    });
  };
};
export const productName = (modalName) => {
  return (dispatch) => {
    dispatch({
      type: "productTitle",
      payload: modalName,
    });
  };
};

export const updateProductState = (local) => {
  return (dispatch) => {
    dispatch({
      type: "newState",
      payload: local,
    });
  };
};
