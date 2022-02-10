import { SET_USER_DETAILS, SET_MON_CARDS } from "../ActionTypes";

export const userReducer = (
  state = {
    userDetails: {},
    monCards: [],
  },
  action
) => {
  switch (action.type) {
    case SET_USER_DETAILS: {
      return {
        ...state,
        userDetails: action.data,
      };
    }
    case SET_MON_CARDS: {
      return {
        ...state,
        monCards: action.data,
      };
    }
    default:
      return state;
  }
};
