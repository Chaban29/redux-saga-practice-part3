import { CounterActions } from '../../types/counter';

export const counterIncrementCreator = (payload: number) => ({
  type: CounterActions.INCREMENT,
  payload,
});
export const counterDecrementCreator = (payload: number) => ({
  type: CounterActions.DECREMENT,
  payload,
});
