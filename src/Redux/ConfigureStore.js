import { createStore, combineReducers } from "redux";

import { popupHandle } from "./Reducers/popup.reducer";

export const ConfigureStore = () => {
  const store = createStore(combineReducers({ popupHandle }));

  return store;
};
