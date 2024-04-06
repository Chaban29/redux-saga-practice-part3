export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

export type TypeUsers = Partial<IUser[]>;

export const enum UsersActions {
  GET = 'users/getUsersFromServer',
}

export type TypeUsersActions = { type: UsersActions.GET; payload: TypeUsers };
