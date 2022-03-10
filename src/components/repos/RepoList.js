import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

function RepoList({ repos }) {
  return (
    <>
      <div className='mt-6'>
        <div className='mx-6 mb-4 lg:mx-4 xl:mx-auto w-fit'>
          <h1 className='ml-2 font-bold text-3xl dark:text-gray-300'>
            Latest Repositories
          </h1>
        </div>

        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </>
  );
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
