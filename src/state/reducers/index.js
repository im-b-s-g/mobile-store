import { combineReducers } from "redux";
import priceReducer from "../reducers/priceReducer";
import pdtNameReducer from "./pdtNameReducer";
import stateReducer from "../reducers/stateReducer";
const reducers = combineReducers({
  totalPrice: priceReducer,
  cartPdtName: pdtNameReducer,
});
export default reducers;
