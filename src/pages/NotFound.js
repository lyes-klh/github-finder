import React from 'react';
import { Link } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';

function NotFound() {
  return (
    <div className='container mx-auto mt-24 dark:text-gray-50 relative'>
      <div className='w-full text-center'>
        <h1 className='text-9xl font-bold'>404</h1>
        <p className='mt-4 text-4xl font-light uppercase'>
          There's NOTHING here...
        </p>
        <Link
          to='/'
          className='inline-block mt-6 py-2 px-4 rounded border-none text-gray-100 bg-gray-900 dark:bg-gray-600 hover:bg-gray-700 dark:hover:bg-gray-700'
        >
          Back Home <BiLeftArrowAlt className=' inline text-xl' />
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
