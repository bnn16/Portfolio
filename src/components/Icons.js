import React from 'react';

function Icons({ icons }) {
  return (
    <div className='flex justify-start items-center gap-4 pb-4'>
      {icons.map((icon, index) => (
        <div className='text-4xl' key={index}>
          {icon}
        </div>
      ))}
    </div>
  );
}

export default Icons;
