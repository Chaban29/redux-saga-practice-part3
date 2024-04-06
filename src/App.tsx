import { FC, Fragment } from 'react';
import { Counter } from './components/Counter/Counter';

export const App: FC = () => {
  return (
    <Fragment>
      <Counter />
    </Fragment>
  );
};
