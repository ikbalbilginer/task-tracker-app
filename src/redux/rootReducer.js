import { combineReducers } from "redux";

import taskReducer from "./Task/task.reducer";
import modalReducer from "./Modal/modal.reducer";

export const rootReducer = combineReducers({
  task: taskReducer,
  modal: modalReducer,
});

export default rootReducer;
