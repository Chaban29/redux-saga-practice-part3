import { combineReducers } from 'redux';
import { counterReducer } from '../reducers/counterReducer';
import { store } from '../store/store';

export const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.getState;
