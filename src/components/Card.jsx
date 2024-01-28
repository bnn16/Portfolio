/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { X } from 'react-feather';
import { motion } from 'framer-motion';
import useLockBodyScroll from '@custom-react-hooks/use-lock-body-scroll';
import PropTypes from 'prop-types';

// Pages
import PortfolioPage from '../pages/PortfolioPage';
import OrdinaPage from '../pages/OrdinaPage';
import YoutubeyPage from '../pages/YoutubeyPage';
import GrpcPage from '../pages/GrpcPage';
import WebscraperPage from '../pages/WebscraperPage';
import EventPlatformPage from '../pages/EventPlatformPage';

// Map the id's to the pages
const components = {
  portfolio: PortfolioPage,
  ordina: OrdinaPage,
  youtubey: YoutubeyPage,
  grpc: GrpcPage,
  webscraper: WebscraperPage,
  eventplatform: EventPlatformPage,
};

function Card({ onClick, data }) {
  const { id } = data;
  const ComponentToRender = components[id];

  useLockBodyScroll(true);

  const containerStyles = window.innerWidth < 600 ? 'top-0 pt-16' : '';

  const innerContainerClasses = window.innerWidth < 600 ? 'w-full min-w-full max-h-screen overflow-auto' : '';

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
      className={`fixed cursor-pointer inset-0 overflow-y-auto min-w-20 flex items-center justify-center bg-deep bg-opacity-0 ${containerStyles}`}
      layout={animated.layout}
      animate={animated.animate}
      transition={animated.transition}
      initial={animated.initial}
      onClick={handleBackgroundClick}
    >
      <div
        className={
          `cursor-default text-justify border relative rounded-lg border-flame-dark border-opacity-80 bg-background-dark p-4 w-full sm:max-w-2xl md:max-w-4xl lg:max-w-3xl min-w-1/4 max-h-screen overflow-auto ${innerContainerClasses}`
        }
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            onClick();
          }
        }}
        role="button"
        tabIndex={0}
      >
        <button
          type="button"
          onClick={onClick}
          className="absolute top-12 right-8 text-flame-dark cursor-pointer"
          style={{ position: 'fixed' }}
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <div className="w-full my-auto sm:w-2/3 lg:w-9/12 mx-auto">
          <ComponentToRender />
        </div>
      </div>
    </motion.div>
  );
}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default Card;
