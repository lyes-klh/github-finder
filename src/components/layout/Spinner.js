import React from 'react';

function Spinner() {
  return (
    <>
      <div className='fixed top-0 left-0 w-full h-full bg-gray-900 opacity-40 z-20'></div>
      <div className='loader fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30'>
        <div className='outer'></div>
        <div className='middle'></div>
        <div className='inner'></div>
      </div>
    </>
  );
}

export default Spinner;
