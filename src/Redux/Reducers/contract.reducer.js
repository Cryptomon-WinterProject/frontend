import { SET_CONTRACT_DETAILS } from "../ActionTypes";

export const contractReducer = (
  state = {
    contract: {},
    account: null,
  },
  action
) => {
  switch (action.type) {
    case SET_CONTRACT_DETAILS: {
      return {
        ...state,
        contract: action.data.contract,
        account: action.data.account,
      };
    }
    default:
      return state;
  }
};
