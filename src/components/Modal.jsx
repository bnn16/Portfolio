import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Modal = ({ children }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-opacity-50 flex items-center justify-center modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white p-8 rounded-md"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
