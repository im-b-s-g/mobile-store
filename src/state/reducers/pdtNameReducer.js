const reducer = (state = [], action) => {
  if (action.type === "productTitle") {
    return [...state, action.payload];
  } else if (action.type === "newState") {
    return action.payload;
  } else return state;
};
export default reducer;
