import React from 'react';
import PropTypes from 'prop-types';

function Image({ imgsrc }) {
  return (
    <div className="flex flex-row flex-grow py-8">
      <img src={imgsrc} alt="img" />
    </div>
  );
}

Image.propTypes = {
  imgsrc: PropTypes.string.isRequired,
};

export default Image;
