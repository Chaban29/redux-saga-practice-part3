import { all } from 'redux-saga/effects';
import { helloSaga } from '../../sagas/sagas';
import { usersRootSaga } from '../../sagas/usersSaga';
import { rootTodosSaga } from '../../sagas/todosSaga';

export function* rootSaga() {
  yield all([helloSaga(), usersRootSaga(), rootTodosSaga()]);
}
