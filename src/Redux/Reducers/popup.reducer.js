import {
  HANDLE_POPUP_OPEN,
  HANDLE_POPUP_COMPONENT_RENDER,
} from "../ActionTypes";

export const popupHandle = (
  state = {
    popupOpen: false,
    popupComponent: null,
  },
  action
) => {
  switch (action.type) {
    case HANDLE_POPUP_OPEN: {
      return {
        ...state,
        popupOpen: action.popupOpen,
      };
    }
    case HANDLE_POPUP_COMPONENT_RENDER: {
      return {
        ...state,
        popupComponent: action.popupComponent,
      };
    }
    default:
      return state;
  }
};
