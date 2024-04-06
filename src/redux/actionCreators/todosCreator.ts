import { ITodos } from '../../types/todos';
import { TodosActions } from '../../types/todos';

export const setTodos = (payload: ITodos) => ({
  type: TodosActions.SET,
  payload,
});
