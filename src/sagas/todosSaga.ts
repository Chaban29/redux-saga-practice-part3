import { put, call, takeEvery, cancelled } from 'redux-saga/effects';
import { getTodosFromServer } from '../api/getTodos';
import { TodosActions } from '../types/todos';
import { setTodos } from '../redux/actionCreators/todosCreator';

let currentRequest: null | boolean = null;

export function* todosWorker(): Generator<any, void, any> {
  try {
    if (currentRequest) {
      yield cancelled();
    }
    currentRequest = true;
    const todosData = yield call(getTodosFromServer);
    yield put(setTodos(todosData));
  } catch (error) {
    console.log(error);
  } finally {
    currentRequest = null;
  }
}

export function* todosWatcher() {
  yield takeEvery(TodosActions.SET, todosWorker);
}

export function* rootTodosSaga() {
  yield todosWatcher();
}
