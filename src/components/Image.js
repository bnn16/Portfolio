import React from 'react';

function Image({ imgsrc }) {
  return (
    <div className='flex flex-row flex-grow py-8'>
      <img src={imgsrc} alt='img' />
    </div>
  );
}

export default Image;
