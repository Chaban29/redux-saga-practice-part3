import { getUsersFromServer } from '../api/getUsers';
import { takeEvery } from 'redux-saga/effects';
import { UsersActions } from '../types/users';

export function* usersWorker() {
  const data: Generator = yield getUsersFromServer();
  yield console.log(data);
}

export function* usersWatcher() {
  yield takeEvery(UsersActions.GET, usersWorker);
}

export function* usersRootSaga() {
  yield usersWatcher();
}
