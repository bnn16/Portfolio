import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';

const MiniCard = ({
  isExpanded, onClick, title, icon,
}) => {
  const [iconColor, setIconColor] = useState('#fff');

  const controls = useAnimation();

  const animated = {
    layout: 'position',
    animate: { opacity: 1, scale: isExpanded ? 0 : 1 },
    transition: { delay: 0.3 },
    initial: { opacity: 0, scale: 1 },
  };

  useEffect(() => {
    controls.start({ color: iconColor });
  }, [iconColor, controls]);

  const onHoverStart = () => {
    setIconColor('#EB5E28');
  };

  const onHoverEnd = () => {
    setIconColor('#fff');
  };

  return (
    <motion.div
      className={`relative w-80 bg-background-light shadow-flame-dark shadow-md hover:bg-background-dark text-flame hover:text-accent p-8 rounded-md cursor-pointer ${
        isExpanded ? 'hidden' : 'h-48'
      }`}
      onClick={onClick}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      layout={animated.layout}
      animate={animated.animate}
      transition={animated.transition}
      initial={animated.initial}
    >
      <div className="flex flex-col items-center">
        {icon && (
          <motion.div
            className="mb-8 text-7xl"
            style={{ color: iconColor }}
            animate={controls}
          >
            {icon}
          </motion.div>
        )}

        <h3 className="text-lg font-semibold text-center">{title}</h3>
      </div>
    </motion.div>
  );
};

MiniCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  isExpanded: PropTypes.bool.isRequired,
};

export default MiniCard;
