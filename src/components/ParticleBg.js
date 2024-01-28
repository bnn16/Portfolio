import Particles, { initParticlesEngine } from '@tsparticles/react';
import React, { useEffect, useState } from 'react';
import { loadFull } from 'tsparticles';
import particles from '../constants/particles';

function ParticleBg() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <Particles
      className='absolute top-0 left-0 w-full h-full z-0'
      id='tsparticles'
      options={particles}
    />
  );
}

export default ParticleBg;
