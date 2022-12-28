import { all, put, takeLatest, call } from "redux-saga/effects";
import { setPriorities } from "./task.actions";
import taskTypes from "./task.types";
import { handleGetPriorities } from "./task.helpers";

function* startGetPriorities() {
  try {
    const response = yield handleGetPriorities();
    if (response.error) {
      throw response.error;
    }
    const { data } = response;
    yield put(setPriorities(data));
  } catch (e) {
    // alert(e);
  }
}

export function* onStartGetPriorities() {
  yield takeLatest(taskTypes.START_GET_PRIORITIES, startGetPriorities);
}

export default function* taskSagas() {
  yield all([call(onStartGetPriorities)]);
}
