import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const CarrouselButtons = ({
  currentPage, setCurrentPage, totalPages,
}) => {
  const handlePreviousClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };
  return (
    <div className="flex justify-center mt-4">
      <div className="button-container" style={{ height: '40px' }}>
        <button
          type="button"
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
  );
};

CarrouselButtons.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default CarrouselButtons;
