/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function Icons({ icons }) {
  return (
    <div className="flex justify-start items-center flex-grow gap-4 pb-4">
      {icons.map((icon) => (
        <div className="text-4xl" key={`${icon.key}`}>
          {icon}
        </div>
      ))}
    </div>
  );
}

Icons.propTypes = {
  icons: PropTypes.array.isRequired,
};

export default Icons;
