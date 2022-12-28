import modalTypes from "./modal.types";

export const setModalData = (payload) => {
  return {
    type: modalTypes.SET_WEBSOCKET,
    payload,
  };
};
