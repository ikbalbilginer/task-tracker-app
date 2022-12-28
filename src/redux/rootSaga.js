import { all, call } from "redux-saga/effects";

import modalSagas from "./Modal/modal.sagas";
import taskSagas from "./Task/task.sagas";

export default function* rootSaga() {
  yield all([call(modalSagas), call(taskSagas)]);
}
