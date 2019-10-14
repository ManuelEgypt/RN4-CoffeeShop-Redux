import { combineReducers } from "redux";

import travelPackageReducer from "./travelPackageReducer";
import cartReducer from "./cartReducer";
import userReducer from "./auth";

export default combineReducers({
  travelPackageReducer: travelPackageReducer,
  cartReducer: cartReducer,
  userReducer: userReducer,
});
