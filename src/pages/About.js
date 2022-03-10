import { ReactComponent as Polygone } from './assets/polygone.svg';

function About() {
  return (
    <div className='container mx-auto mt-24 dark:text-gray-50 relative'>
      <Polygone className='hidden absolute top-0 right-6 -z-20 stroke-gray-800 dark:stroke-white md:block' />

      <div className='mx-5'>
        <h1 className='text-4xl md:text-6xl mb-2'>Github Finder App</h1>
        <p className='tex-lg md:text-xl ml-2 text-gray-600 dark:text-gray-400'>
          A React App to search Github profiles and see profile details.
        </p>
      </div>
    </div>
  );
}

export default About;
