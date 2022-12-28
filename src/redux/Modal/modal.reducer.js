import modalTypes from "./modal.types";

const INITIAL_STATE = {
  loading: false,
};

const modalReducer = (state = INITIAL_STATE, action) => {
  //  // console.log(action.type, action.payload);
  switch (action.type) {
    case modalTypes.SET_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;
