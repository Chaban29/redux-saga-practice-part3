import { all } from 'redux-saga/effects';
import { helloSaga } from '../../sagas/sagas';

export function* rootSaga() {
  yield all([helloSaga()]);
}
