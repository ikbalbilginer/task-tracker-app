import modalTypes from "./modal.types";
import { BASE_URL } from "../../constants/config";

const INITIAL_STATE = {
  loading: false,
  aracLocation: "",
  ws: BASE_URL,
  wsStatus: "",
};

const modalReducer = (state = INITIAL_STATE, action) => {
  //  // console.log(action.type, action.payload);
  switch (action.type) {
    case modalTypes.SET_WEBSOCKET:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default modalReducer;
