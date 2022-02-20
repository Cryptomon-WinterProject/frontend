import { createStore, combineReducers } from "redux";

import { popupHandle } from "./Reducers/popup.reducer";
import { contractReducer } from "./Reducers/contract.reducer";
import { userReducer } from "./Reducers/user.reducer";
import { navbarReducer } from "./Reducers/navbar.reducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      popupHandle,
      contractReducer,
      userReducer,
      navbarReducer,
    })
  );

  return store;
};
