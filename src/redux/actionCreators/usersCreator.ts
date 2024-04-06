import { TypeUsers, UsersActions } from '../../types/users';

export const getUsersCreator = (payload: TypeUsers) => ({
  type: UsersActions.GET,
  payload,
});
