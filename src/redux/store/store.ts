import { createStore, applyMiddleware, Reducer } from 'redux';
import { rootReducer } from '../rootReducer/rootReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../rootSaga/rootSaga';

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
  rootReducer as Reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);
