import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/GuthubContext';

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  return (
    <div className='mx-5 mt-2 mb-5 py-2 md:mx-10 lg:mx-14  grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4'>
      {loading && <Spinner />}

      {users.length > 0 &&
        users.map((user) => <UserItem key={user.id} user={user} />)}
    </div>
  );
}

export default UserResults;
