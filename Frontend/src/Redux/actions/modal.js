export const OPEN_MODAL = "OPEN_MODAL";

export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModalAction = () => (dispatch) => {
  dispatch({ type: OPEN_MODAL });
};
export const closeModalAction = () => (dispatch) => {
  dispatch({ type: CLOSE_MODAL });
};
