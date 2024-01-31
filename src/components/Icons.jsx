/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Icons = ({ icons }) => {
  const key = 0;
  return (
    <div className="flex justify-start items-center flex-grow gap-4 pb-4">
      {icons.map((ico, i) => (
        <div className="text-4xl" key={`${key + i}`}>
          {ico}
        </div>
      ))}
    </div>
  );
};

Icons.propTypes = {
  icons: PropTypes.array.isRequired,
};

export default Icons;
