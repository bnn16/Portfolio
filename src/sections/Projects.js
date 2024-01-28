import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../components/Reveal';
import { FaReact } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';
import { DiGo, DiJava, DiJavascript1, DiPython } from 'react-icons/di';
import Card from '../components/Card';
import Modal from '../components/Modal';
import MiniCard from '../components/MiniCard';

function Projects({ setOpen }) {
  const projectData = [
    {
      title: 'Portfolio',
      icon: <FaReact />,
      id: 'portfolio',
    },
    {
      title: 'Ordina Check-in/out',
      icon: <DiJavascript1 />,
      id: 'ordina',
    },

    {
      title: 'Youtubey',
      icon: <DiJava />,
      id: 'youtubey',
    },
    {
      title: 'gRPC and RabbitMQ',
      icon: <DiGo />,
      id: 'grpc',
    },
    {
      title: 'Stack WebScraper',
      icon: <DiPython />,
      id: 'webscraper',
    },
    {
      title: 'Event Platform',
      icon: <SiDotnet />,
      id: 'eventplatform',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalItems = projectData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleMiniCardClick = (index) => {
    setOpen(true);
    window.scrollTo(0, document.body.scrollHeight);
    setExpandedIndex(index);
  };

  const handleCardClose = () => {
    setOpen(false);
    setExpandedIndex(null);
  };

  const handlePreviousClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const getVisibleItems = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    return projectData.slice(startIndex, endIndex).map((data, i) => {
      const cardIndex = startIndex + i;
      return (
        <div key={cardIndex}>
          <Reveal>
            <MiniCard
              title={data.title}
              icon={data.icon}
              key={cardIndex}
              isExpanded={expandedIndex === cardIndex}
              onClick={() => handleMiniCardClick(cardIndex)}
            />
          </Reveal>
        </div>
      );
    });
  };
  return (
    <div className='z-10 min-h-screen text-accent relative'>
      <div className={`p-10 ${expandedIndex !== null ? 'blur' : ''}`}>
        <div className='flex flex-col'>
          <Reveal>
            <h1 className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold underline-offset-6 underline decoration-flame'>
              Projects.
            </h1>
          </Reveal>
        </div>
        <div className='flex flex-wrap justify-evenly gap-y-8 sm:gap-y-12 lg:gap-y-16 gap-x-4 sm:gap-x-8 lg:gap-x-12 mt-6 sm:mt-12 lg:mt-20'>
          {getVisibleItems()}
        </div>
        <div className='flex justify-center mt-4'>
          <div className='button-container' style={{ height: '40px' }}>
            <button
              onClick={handlePreviousClick}
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${
                currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={currentPage === 0}
            >
              Previous
            </button>
            <motion.button
              onClick={handleNextClick}
              className={`motion-button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${
                currentPage === totalPages - 1
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
              disabled={currentPage === totalPages - 1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Next
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {expandedIndex !== null && (
          <Modal>
            <Card onClick={handleCardClose} data={projectData[expandedIndex]} />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
