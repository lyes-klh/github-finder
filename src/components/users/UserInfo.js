import PropTypes from 'prop-types';

function UserInfo({ user }) {
  return (
    <div className='flex flex-col items-center lg:flex-row lg:h-72 lg:max-w-6xl  mx-6 mb-4 lg:mx-4 xl:mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100 bg-opacity-95  hover:shadow-xl dark:border-none dark:bg-gray-800 dark:bg-opacity-95 relative'>
      <div className='relative  lg:basis-72 lg:grow-0 lg:shrink-0 xl:basis-auto xl:grow-1 xl:shrink-1 xl:w-fit flex '>
        <img
          className='h-44 w-44 rounded-full my-4 lg:my-0 lg:rounded lg:h-72 lg:w-72 '
          src={user.avatar_url}
          alt=''
        />
      </div>
      <div className='px-4 sm:px-8 py-4 lg:py-0 w-full'>
        <div className='flex flex-col sm:flex-row sm:gap-6 gap-2 items-center mb-5'>
          <h1 className='font-bold text-2xl '> {user.login} </h1>
          <div className='flex justify-center items-center gap-2 font-light text-sm'>
            <div className='highlight text-lime-700 bg-lime-600 bg-opacity-20 dark:text-lime-400 dark:bg-lime-500 dark:bg-opacity-20'>
              {user.followers} Followers
            </div>
            <div className='highlight text-violet-700 bg-violet-600 bg-opacity-20 dark:text-violet-400 dark:bg-violet-500 dark:bg-opacity-20'>
              {user.following} Following
            </div>
            <div className='highlight text-emerald-700 bg-emerald-600 bg-opacity-20 dark:text-emerald-400 dark:bg-emerald-500 dark:bg-opacity-20'>
              {user.public_repos} Public Repos
            </div>
          </div>
        </div>
        <p className=' dark:text-gray-300 mb-6'>{user.bio}</p>
        <a
          href={user.html_url}
          target='_blank'
          rel='noreferrer'
          className='px-6 py-2 inline-block mb-6 rounded text-gray-50 bg-gray-600 hover:bg-gray-500'
        >
          Visit github Profile
        </a>
        <div className='flex flex-col sm:flex-row items-center justify-around gap-6'>
          {user.location && (
            <div className='small-card'>
              <span className='card-title '>Location</span>
              <span className='text-md'>{user.location}</span>
            </div>
          )}

          {user.blog && (
            <div className='small-card'>
              <span className='card-title '>Website</span>
              <a
                className='text-md'
                href={
                  user.blog.startsWith('http')
                    ? user.blog
                    : 'https://' + user.blog
                }
                target='_blank'
                rel='noreferrer'
              >
                {user.blog}
              </a>
            </div>
          )}
          {user.twitter_username && (
            <div className='small-card'>
              <span className='card-title '>Twitter</span>
              <a
                target='_blank'
                href={'https://twitter.com/' + user.twitter_username}
                rel='noreferrer'
                className='text-md'
              >
                {user.twitter_username}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserInfo;
