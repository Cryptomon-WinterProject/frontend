import { createStore, combineReducers } from "redux";

import { popupHandle } from "./Reducers/popup.reducer";
import { contractReducer } from "./Reducers/contract.reducer";

export const ConfigureStore = () => {
  const store = createStore(combineReducers({ popupHandle, contractReducer }));

  return store;
};
