import { SET_NAVBAR_STATE, SET_SWITCH_STATE } from "../ActionTypes";

export const navbarReducer = (
  state = {
    navbarState: "home",
    switchState: "store",
  },
  action
) => {
  switch (action.type) {
    case SET_NAVBAR_STATE: {
      return {
        ...state,
        navbarState: action.state,
      };
    }
    case SET_SWITCH_STATE: {
      return {
        ...state,
        switchState: action.state,
      };
    }
    default:
      return state;
  }
};
