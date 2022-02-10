import { createStore, combineReducers } from "redux";

import { popupHandle } from "./Reducers/popup.reducer";
import { contractReducer } from "./Reducers/contract.reducer";
import { userReducer } from "./Reducers/user.reducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ popupHandle, contractReducer, userReducer })
  );

  return store;
};
