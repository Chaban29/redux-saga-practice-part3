import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  counterDecrementCreator,
  counterIncrementCreator,
} from '../../redux/actionCreators/counterCreator';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const counter = useAppSelector((state) => state?.counter?.count || 0);

  const handleIncreaseValue = () => {
    dispatch(counterIncrementCreator(100));
  };

  const handleDecreaseValue = () => {
    if (!counter) return;
    dispatch(counterDecrementCreator(50));
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncreaseValue}>Increase value</button>
      <button onClick={handleDecreaseValue}>Decrease value</button>
    </div>
  );
};
