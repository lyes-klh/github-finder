import PropTypes from 'prop-types';
import {
  BiLinkExternal,
  BiGitRepoForked,
  BiStar,
  BiShow,
} from 'react-icons/bi';

function RepoItem({ repo }) {
  return (
    <div className='repo-card'>
      <div className='flex items-center mb-4 gap-2 text-lg font-bold'>
        <span>{repo.name}</span>
        <a href={repo.html_url} target='_blank' rel='noreferrer'>
          <BiLinkExternal className='font-bold' />
        </a>
      </div>

      {repo.description && (
        <div className=' dark:text-gray-300 '>
          <p>{repo.description}</p>
        </div>
      )}

      <div className='flex mt-4 items-center gap-2 font-light text-sm'>
        <div className='highlight text-amber-700 bg-amber-600 bg-opacity-20 dark:text-amber-400 dark:bg-amber-500 dark:bg-opacity-20'>
          <BiGitRepoForked className='mr-2' />
          <span className='mr-1'>{repo.forks} </span>
        </div>
        <div className='highlight text-teal-700 bg-teal-600 bg-opacity-20 dark:text-teal-400 dark:bg-teal-500 dark:bg-opacity-20'>
          <BiStar className='mr-2' />
          <span className='mr-1'>{repo.stargazers_count} </span>
        </div>

        <div className='highlight text-pink-700 bg-pink-600 bg-opacity-20 dark:text-pink-400 dark:bg-pink-500 dark:bg-opacity-20'>
          <BiShow className='mr-2' />
          <span className='mr-1'>{repo.watchers_count} </span>
        </div>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
