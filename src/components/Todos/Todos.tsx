import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setTodos } from '../../redux/actionCreators/todosCreator';
import { getTodosFromServer } from '../../api/getTodos';

export const Todos: FC = () => {
  const dispatch = useDispatch();
  const todos = useAppSelector((state) => state.todos.todos);

  const handleSetTodosFromServer = async () => {
    try {
      const { todos: todosData } = await getTodosFromServer();
      dispatch(setTodos({ todos: todosData }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ul>
        {todos && todos.length === 0 ? (
          <div>Todos is empty</div>
        ) : (
          todos.map((todo) => <li key={todo.id}>{todo.title}</li>)
        )}
      </ul>
      <button
        disabled={todos.length === 10 ? true : false}
        onClick={handleSetTodosFromServer}
      >
        Set Todos
      </button>
    </div>
  );
};
