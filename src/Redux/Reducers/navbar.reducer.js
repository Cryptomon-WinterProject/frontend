import { SET_NAVBAR_STATE } from "../ActionTypes";

export const navbarReducer = (
  state = {
    navbarState: "home",
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
    default:
      return state;
  }
};
