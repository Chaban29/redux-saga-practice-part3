import { takeEvery, takeLatest, takeLeading, select } from 'redux-saga/effects';
import { CounterActions } from '../types/counter';

const delay = (ms: number) =>
  new Promise<void>((res) => setTimeout(res, ms * 1000));

export function* workerClickSaga() {
  const count: Generator = yield select(({ counter }) => counter.count);
  yield delay(2);
  yield console.log(`request ${count}`);
}

export function* watchClickSaga() {
  yield takeLatest(CounterActions.INCREMENT, workerClickSaga);
  yield takeLeading(CounterActions.INCREMENT, workerClickSaga);
}

export function* helloSaga() {
  yield watchClickSaga();
}
