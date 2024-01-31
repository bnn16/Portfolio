import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ text }) => {
  return (
    <span className="inline-block flex justify-center bg-flame text-accent px-2 sm:px-4 py-1 sm:py-2 rounded-md">
      {text}
    </span>
  );
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Badge;
