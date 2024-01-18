import React, { useEffect, useState } from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import ParticleBg from '../components/ParticleBg';

function Welcome() {
  const words = ['Developer', 'Engineer', 'Creative Thinker'];

  return (
    <header className='flex h-screen items-center justify-center flex-col'>
      <ParticleBg />
      <h1 className='text-4xl font-bold text-accent z-10    '>
        Bogdan <span className='text-flame'>Nikolov</span>
      </h1>
      <div className='flex-row z-10'>
        <Typewriter
          cursor='true'
          cursorColor='#EB5E28'
          words={words}
          delaySpeed={1000}
          loop='true'
        />
      </div>
    </header>
  );
}

export default Welcome;
