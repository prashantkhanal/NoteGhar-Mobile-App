import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import popularReducer from "./popular.reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  popular: popularReducer,
});
