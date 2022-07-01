import React, { useContext, useEffect } from 'react';
import RepoList from '../components/repos/RepoList';
import UserInfo from '../components/users/UserInfo';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserAndRepos } from '../context/github/GithubActions';
import GithubContext from '../context/github/GithubContext';
import Spinner from '../components/layout/Spinner';

function User() {
  const { login } = useParams();
  const { user, repos, loading, dispatch } = useContext(GithubContext);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    const getUserData = async () => {
      try {
        const userData = await getUserAndRepos(login);
        dispatch({ type: 'GET_USER_AND_REPOS', payload: userData });
      } catch (e) {
        dispatch({ type: 'CLEAR_LOADING' });
        navigate('/not-found');
      }
    };

    getUserData();

    return () => dispatch({ type: 'CLEAR_USER_DATA' });
  }, [dispatch, navigate, login]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <UserInfo user={user} />
      <RepoList repos={repos} />
    </>
  );
}

export default User;
