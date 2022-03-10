import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { BiHome, BiInfoCircle, BiSun, BiMoon } from 'react-icons/bi';

function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (isDarkTheme) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkTheme]);

  const modeMenuRef = useRef(null);

  const toggleMenu = (e) => {
    modeMenuRef.current.classList.toggle('hidden');
  };

  const handleLight = (e) => {
    e.preventDefault();
    setIsDarkTheme(false);
    modeMenuRef.current.classList.add('hidden');
  };

  const handleDark = (e) => {
    e.preventDefault();
    setIsDarkTheme(true);
    modeMenuRef.current.classList.add('hidden');
  };

  return (
    <nav className='flex justify-between items-center fixed top-0 left-0 w-full  z-20 text-gray-900 bg-white h-16 px-5 sm:px-12 md:px-20 mx-auto border-b dark:text-gray-50 dark:border-gray-800 dark:bg-gray-900'>
      <Link
        to='/'
        className='text-md md:text-2xl font-bold flex items-center cursor-pointer'
      >
        <FaGithub className='mr-2 text-lg md:text-3xl' /> GitHub Finder
      </Link>
      <div className='text-md flex justify-center items-center'>
        <Link
          to='/'
          className='flex items-center justify-center uppercase hover:text-cyan-500 transition-colors ease-in duration-100 text-sm lg:text-lg'
        >
          <BiHome className='mr-1 lg:text-lg' /> Home
        </Link>
        <Link
          to='/about'
          className='flex items-center ml-3 md:ml-6 uppercase hover:text-cyan-500 transition-colors ease-in duration-100 text-sm lg:text-lg'
        >
          <BiInfoCircle className='mr-1 lg:text-lg' /> About
        </Link>
        <div
          className='inline ml-2 md:ml-6 relative flex justify-center items-center'
          id='mode-toggle'
        >
          <span
            className='cursor-pointer hover:text-cyan-500 transition-colors ease-in duration-100'
            onClick={toggleMenu}
          >
            {isDarkTheme ? (
              <BiMoon className='text-lg md:text-2xl' />
            ) : (
              <BiSun className='text-lg md:text-2xl' />
            )}
          </span>
          <ul
            className='hidden overflow-hidden w-32 h-20 rounded border border-gray-200 flex flex-col justify-center absolute top-14 -left-24 md:-left-14 bg-white dark:bg-gray-800'
            ref={modeMenuRef}
          >
            <li
              className='cursor-pointer flex items-center py-1 px-2 bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700'
              onClick={handleLight}
            >
              <BiSun className='text-lg md:text-xl mr-2' />
              Light
            </li>
            <li
              className='cursor-pointer flex items-center py-1 px-2 dark:bg-gray-700 hover:bg-gray-100'
              onClick={handleDark}
            >
              <BiMoon className='text-lg md:text-xl mr-2' />
              Dark
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
