import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

function MiniCard({ isExpanded, onClick, title, icon }) {
  const animated = {
    layout: 'position',
    animate: { opacity: 1, scale: isExpanded ? 0 : 1 },
    transition: { delay: 0.3 },
    initial: { opacity: 0, scale: 1 },
  };

  const [iconColor, setIconColor] = useState('#fff');

  const controls = useAnimation();

  const onHoverStart = () => {
    setIconColor('#EB5E28');
  };

  const onHoverEnd = () => {
    setIconColor('#fff');
  };

  useEffect(() => {
    controls.start({ color: iconColor });
  }, [iconColor, controls]);

  return (
    <motion.div
      className={`relative w-80 bg-background-light shadow-flame-dark shadow-md hover:bg-background-dark text-flame hover:text-accent p-8 rounded-md cursor-pointer ${
        isExpanded ? 'hidden' : 'h-48'
      }`}
      layout
      onClick={onClick}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      {...animated}
    >
      <div className='flex flex-col items-center'>
        {icon && (
          <motion.div
            className='mb-8'
            style={{ fontSize: '5em', color: iconColor }}
            animate={controls}
          >
            {icon}
          </motion.div>
        )}

        <h3 className='text-lg font-semibold text-center'>{title}</h3>
      </div>
    </motion.div>
  );
}

export default MiniCard;
