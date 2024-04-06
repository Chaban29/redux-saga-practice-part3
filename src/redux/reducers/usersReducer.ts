import { TypeUsers, TypeUsersActions, UsersActions } from '../../types/users';

const initialState: TypeUsers = [];

export const usersReducer = (
  state = initialState,
  { type, payload }: TypeUsersActions
) => {
  switch (type) {
    case UsersActions.GET:
      return [...state, ...payload];
    default:
      return state;
  }
};
