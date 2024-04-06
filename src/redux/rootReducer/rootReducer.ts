import { combineReducers } from 'redux';
import { counterReducer } from '../reducers/counterReducer';
import { store } from '../store/store';
import { usersReducer } from '../reducers/usersReducer';
import { todosReducer } from '../reducers/todosReducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.getState;
