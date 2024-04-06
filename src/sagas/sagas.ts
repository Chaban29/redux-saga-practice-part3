import { take } from 'redux-saga/effects';
import { CounterActions } from '../types/counter';

export function* watchClickSaga() {
  yield take(CounterActions.INCREMENT);
  yield console.log('request 1');
  yield take(CounterActions.DECREMENT);
  yield console.log('request 2');
}

export function* workerClickSaga() {}

export function* helloSaga() {
  yield watchClickSaga();
}
