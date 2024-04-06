import { all } from 'redux-saga/effects';
import { helloSaga } from '../../sagas/sagas';
import { usersRootSaga } from '../../sagas/usersSaga';

export function* rootSaga() {
  yield all([helloSaga(), usersRootSaga()]);
}
