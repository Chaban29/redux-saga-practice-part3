import { TodosActions, TypeTodosActions } from '../../types/todos';
import { ITodos } from '../../types/todos';

const initialState: ITodos = {
  todos: [],
};

export const todosReducer = (
  state = initialState,
  { type, payload }: TypeTodosActions
) => {
  switch (type) {
    case TodosActions.SET:
      return {
        ...state,
        todos: payload.todos,
      };
    default:
      return state;
  }
};
