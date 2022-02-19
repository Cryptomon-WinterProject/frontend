import {
  SET_USER_DETAILS,
  SET_MON_CARDS,
  SET_STORE_CARDS,
} from "../ActionTypes";

export const userReducer = (
  state = {
    userDetails: null,
    monCards: [],
    storeCards: [],
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
    case SET_STORE_CARDS: {
      return {
        ...state,
        storeCards: action.data,
      };
    }
    default:
      return state;
  }
};
