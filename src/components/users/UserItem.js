import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/GuthubContext';

function UserItem({ user }) {
  const { dispatch } = useContext(GithubContext);

  // To prevent User component from rendering before loading
  const handleClick = (e) => {
    dispatch({ type: 'SET_LOADING' });
  };
  return (
    <>
      <div className='card '>
        <img
          src={user.avatar_url}
          alt={`${user.login}`}
          className='w-24 h-24 rounded-full mr-4'
        />
        <div className='flex flex-col justify-center '>
          <span className='font-bold text-xl mb-1'>{user.login}</span>
          <Link
            to={`/user/${user.login}`}
            onClick={handleClick}
            className='text-sm text-gray-400 hover:text-cyan-600 transition-colors ease-in duration-100 dark:text-gray-300 dark:hover:text-cyan-700 '
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
