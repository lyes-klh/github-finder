import { useState, useContext } from 'react';
import { BiXCircle } from 'react-icons/bi';
import GithubContext from '../../context/github/GuthubContext';
import { getUsers } from '../../context/github/GithubActions';

function UserSearch() {
  const [search, setSearch] = useState('');
  const { users, alert, dispatch } = useContext(GithubContext);

  const handleChange = (e) => {
    if (e.target.value.length > 0) dispatch({ type: 'CLEAR_ALERT' });
    setSearch(e.target.value);
  };

  const handleClick = async (e) => {
    if (e.type === 'click' || e.key === 'Enter') {
      e.preventDefault();

      if (search) {
        dispatch({ type: 'CLEAR_USERS' });
        dispatch({ type: 'SET_LOADING' });
        const data = await getUsers(search);
        dispatch({ type: 'GET_USERS', payload: { users: data } });
        setSearch('');
      } else {
        dispatch({ type: 'SET_ALERT' });
      }
    }
  };

  return (
    <div className=' py-4 mx-4 md:mx-10 lg:mx-14'>
      <div className='mb-16'>
        <h1 className='text-5xl md:text-7xl font-bold mb-3'>GitHub Finder</h1>
        <p className='text-lg font-light text-gray-500 ml-2 uppercase dark:text-gray-300'>
          A more{' '}
          <span className='underline decoration-cyan-500 decoration-2 underline-offset-2'>
            elegant{' '}
          </span>
          way to search GitHub accounts and repos !
        </p>
      </div>

      <div>
        {alert && (
          <div className='flex font-bold items-center p-3 mb-2 rounded text-red-800 bg-red-100 bg-opacity-90 w-64'>
            <BiXCircle className='mr-2 text-2xl' />
            <p>Please Enter A Value Below</p>
          </div>
        )}
        <p className='text-md font-light  text-gray-500 pb-1 ml-1 dark:text-gray-50'>
          Enter the github name below :
        </p>

        <div className='flex justify-between items-center  shadow-sm border-0 rounded overflow-hidden w-full md:w-7/12'>
          <input
            className='w-full px-3 py-3 text-gray-900 focus:outline-none bg-gray-200 dark:bg-gray-700 dark:text-gray-100'
            type='text'
            placeholder='ex: Lyes-klh'
            value={search}
            onChange={handleChange}
            onKeyDown={handleClick}
          />
          <button className='btn' onClick={handleClick}>
            Search
          </button>
        </div>

        {users.length > 0 && (
          <button
            className='btn mt-4 rounded bg-gray-400 hover:bg-gray-500 dark:bg-gray-800 dark:hover:bg-gray-600 '
            onClick={(e) => dispatch({ type: 'CLEAR_DATA' })}
          >
            {' '}
            Clear{' '}
          </button>
        )}
      </div>
    </div>
  );
}

export default UserSearch;
