import React from 'react';
import { BiCopyright } from 'react-icons/bi';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='h-20 py-2 border-t flex flex-col justify-around items-center dark:text-gray-50 dark:border-gray-800'>
      <div className='flex justify-center gap-2 mb-1'>
        <a
          href='https://www.linkedin.com/in/lyes-kellouche-24ab32226/'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedin className='text-xl' />
        </a>

        <a href='https://github.com/lyes-klh' target='_blank' rel='noreferrer'>
          <FaGithubSquare className=' text-xl' />
        </a>
      </div>
      <div className='flex justify-center items-center text-sm'>
        Lyes Kellouche - All Rights Reserved <BiCopyright className='ml-1' />
      </div>
    </footer>
  );
}

export default Footer;
