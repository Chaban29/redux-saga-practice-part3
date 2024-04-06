import { getUsersFromServer } from '../api/getUsers';
import { takeEvery } from 'redux-saga/effects';
import { UsersActions } from '../types/users';

export function* usersWorker() {
  yield getUsersFromServer();
}

export function* usersWatcher() {
  yield takeEvery(UsersActions.GET, usersWorker);
}

export function* usersRootSaga() {
  yield usersWatcher();
}
