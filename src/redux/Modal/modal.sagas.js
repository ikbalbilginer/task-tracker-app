import { all, put, takeLatest, call } from "redux-saga/effects";
import { setModalData } from "./modal.actions";
import modalTypes from "./modal.types";
import { handleGetModalData } from "./modal.helpers";

function* startGetModalData({ payload }) {
  try {
    const modalData = yield handleGetModalData(payload);
    yield put(setModalData(modalData));
  } catch (err) {
    // console.log("modalData  er :", err);
  }
}
export function* onStartGetModalData() {
  yield takeLatest(modalTypes.ASD, startGetModalData);
}

export default function* modalSagas() {
  yield all([call(onStartGetModalData)]);
}
