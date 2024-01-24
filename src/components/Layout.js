import React from 'react';

function Layout({ children }) {
  return (
    <div className='container mx-auto p-8'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold mb-2'>Portfolio</h1>
        {children}
      </div>
    </div>
  );
}

export default Layout;
