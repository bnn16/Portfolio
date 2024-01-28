import React from 'react';
import { X } from 'react-feather';
import { motion } from 'framer-motion';
import useLockBodyScroll from '@custom-react-hooks/use-lock-body-scroll';
import PortfolioPage from '../pages/PortfolioPage';
import OrdinaPage from '../pages/OrdinaPage';
import YoutubeyPage from '../pages/YoutubeyPage';
import GrpcPage from '../pages/GrpcPage';
import WebscraperPage from '../pages/WebscraperPage';
import EventPlatformPage from '../pages/EventPlatformPage';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';

const components = {
  portfolio: PortfolioPage,
  ordina: OrdinaPage,
  youtubey: YoutubeyPage,
  grpc: GrpcPage,
  webscraper: WebscraperPage,
  eventplatform: EventPlatformPage,
};

function Card({ onClick, data }) {
  const id = data.id;
  const ComponentToRender = components[id];

  useLockBodyScroll(true);

  // Additional styles for mobile responsiveness
  const containerStylesMobile = {
    top: 0,
    paddingTop: '4rem',
  };

  const innerContainerClassesMobile =
    'w-full min-w-full max-h-screen overflow-auto';

  // Combine styles based on screen width
  const containerStyles = `fixed inset-0 overflow-y-auto min-w-20 flex items-center justify-center bg-deep bg-opacity-0 ${
    window.innerWidth < 600 ? containerStylesMobile : ''
  }`;

  const innerContainerClasses = `w-full sm:max-w-2xl md:max-w-4xl lg:max-w-3xl min-w-1/4 max-h-screen overflow-auto ${
    window.innerWidth < 600 ? innerContainerClassesMobile : ''
  }`;
  const animated = {
    layout: 'position',
    animate: { opacity: 1, scale: 1.1 },
    transition: { delay: 0.3 },
    initial: { opacity: 0, scale: 1 },
  };

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('bg-deep')) {
      onClick();
    }
  };

  return (
    <motion.div
      {...animated}
      className={containerStyles}
      layout
      onClick={handleBackgroundClick}
    >
      <div
        className={
          'text-justify border relative rounded-lg border-flame-dark border-opacity-80 bg-background-dark p-4 ' +
          innerContainerClasses
        }
        onClick={(e) => e.stopPropagation()}
      >
        {/* X button */}
        <button
          onClick={onClick}
          className='absolute top-12 right-8 text-flame-dark cursor-pointer'
          style={{ position: 'fixed' }}
        >
          <X size={24} />
        </button>
        <div className='w-full sm:w-2/3 lg:w-9/12 mx-auto'>
          <ComponentToRender />
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
