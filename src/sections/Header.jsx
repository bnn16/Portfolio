import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import scroll from '../img/scroll.png';
import ParticleBg from '../components/ParticleBg';
import Reveal from '../components/Reveal';

function Header() {
  const words = ['Developer', 'Engineer', 'Creative Thinker'];

  return (
    <header className="flex h-screen items-center justify-center flex-col">
      <ParticleBg />
      <Reveal>
        <h1 className="text-4xl font-bold text-accent z-10">
          Bogdan
          {' '}
          <span className="text-flame">Nikolov</span>
        </h1>
      </Reveal>
      <Reveal>
        <div className="flex-row z-10">
          <Typewriter
            cursor="true"
            cursorColor="#EB5E28"
            words={words}
            delaySpeed={1000}
            loop="true"
          />
        </div>
      </Reveal>

      <div className="absolute bottom-0 mb-4 mx-4 z-10">
        <motion.img
          className="invert h-10 w-10"
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          src={scroll}
          alt="scroll"
        />
      </div>
    </header>
  );
}

export default Header;
