import React from 'react';
import UserSearch from '../components/users/UserSearch';
import UserResults from '../components/users/UserResults';
import { ReactComponent as Polygone } from './assets/polygone.svg';

function Home() {
  return (
    <>
      <Polygone className='hidden absolute top-0 right-6 -z-20 stroke-gray-800 dark:stroke-white lg:block' />
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;
