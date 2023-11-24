const reducer = (state = [{}], action) => {
  if (action.type === "newState") {
    console.log(action.payload);
    return action.payload;
  } else return state;
};
export default reducer;
