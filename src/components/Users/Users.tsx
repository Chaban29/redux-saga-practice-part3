import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getUsersFromServer } from '../../api/getUsers';
import { getUsersCreator } from '../../redux/actionCreators/usersCreator';
import { TypeUsers } from '../../types/users';

export const Users: FC = () => {
  const users = useAppSelector((state) => state.users) as TypeUsers;
  const dispatch = useDispatch();

  const handleGetUsersFromServer = async () => {
    try {
      const users = await getUsersFromServer();
      return dispatch(getUsersCreator(users));
    } catch (error) {
      console.error('Unknown users, sorry...');
    }
  };

  return (
    <div>
      <ul>
        {users.length === 0 ? (
          <div>Users is empty</div>
        ) : (
          users.map((user) => (
            <li key={user?.id}>
              {user?.name} <br /> Email: <b>{user?.email}</b>
            </li>
          ))
        )}
      </ul>
      <button
        disabled={users.length === 10 ? true : false}
        onClick={handleGetUsersFromServer}
      >
        Get users
      </button>
    </div>
  );
};
