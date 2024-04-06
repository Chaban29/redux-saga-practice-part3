import { FC, Fragment } from 'react';
import { Todos } from './components/Todos/Todos';
import { Users } from './components/Users/Users';

export const App: FC = () => {
  return (
    <Fragment>
      <Users />
      <Todos />
    </Fragment>
  );
};
