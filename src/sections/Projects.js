import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../components/Reveal';
import { FaReact } from 'react-icons/fa';
import { DiGnu } from 'react-icons/di';
import Card from '../components/Card';
import Modal from '../components/Modal';
import MiniCard from '../components/MiniCard';

function Projects() {
  const projectData = [
    {
      title: 'Portfolio Application',
      icon: <FaReact />,
    },
    {
      title: 'C++ Compiler',
      icon: <DiGnu />,
    },

    {
      title: 'C++ Compiler',
      icon: <DiGnu />,
    },
    {
      title: 'C++ Compiler',
      icon: <DiGnu />,
    },
    {
      title: 'C++ Compiler',
      icon: <DiGnu />,
    },
    {
      title: 'C++ Compiler',
      icon: <DiGnu />,
    },

    {
      title: 'C++ Compiler',
      icon: <DiGnu />,
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalItems = projectData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleMiniCardClick = (index) => {
    setExpandedIndex(index);
  };

  const handleCardClose = () => {
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
            <h1 className='text-5xl font-bold underline-offset-6 underline decoration-flame'>
              Projects.
            </h1>
          </Reveal>
        </div>
        <div className='flex flex-wrap justify-evenly gap-y-12 gap-x-12 mt-6'>
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
          <Modal onClose={handleCardClose}>
            <Card
              isExpanded={true}
              onClick={handleCardClose}
              index={expandedIndex}
            />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
