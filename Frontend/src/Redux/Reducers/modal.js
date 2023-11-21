import { CLOSE_MODAL, OPEN_MODAL } from "../actions/modal";

export const modalReducer = (state = { isModalOpen:false }, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };

    default:
      return state;
  }
};
