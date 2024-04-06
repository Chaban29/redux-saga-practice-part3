export interface ITodo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface ITodos {
  todos: ITodo[];
}

export type TypeTodos = ITodos;

export const enum TodosActions {
  SET = 'todos/setTodos',
}

export type TypeTodosActions = { type: TodosActions.SET; payload: ITodos };
