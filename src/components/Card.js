import { motion } from 'framer-motion';

function Card({ isExpanded, onClick, data }) {
  const animated = {
    layout: 'position',
    animate: { opacity: 1, scale: isExpanded ? 1.1 : 1 },
    transition: { delay: 0.3 },
    initial: { opacity: 0, scale: 1 },
  };

  return (
    <motion.div
      className={`relative w-80 bg-flame p-8 rounded-md cursor-pointer ${
        isExpanded ? 'h-auto z-20' : 'h-48'
      }`}
      layout
    >
      <motion.h3 className='text-lg font-semibold mb-4' layout='position'>
        Expandable Card 🔥 + {data.title}
      </motion.h3>

      <motion.p className='text-sm text-justify mb-4' layout='position'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sunt
        consequuntur sint ullam blanditiis alias et consectetur animi voluptates
        quibusdam.
      </motion.p>

      {isExpanded && (
        <>
          <motion.img
            {...animated}
            src='./images/img1.png'
            alt='demo image'
            className='w-full h-48 mb-4 rounded-md'
          />

          <motion.p {...animated} className='text-sm text-justify mb-4'>
            Perferendis dolorem! Voluptate iste reprehenderit voluptatem,
            assumenda est commodi, repudiandae enim eveniet cumque praesentium
            neque vero iure.
          </motion.p>

          <motion.div {...animated} className='flex justify-end'>
            <motion.button
              onClick={onClick}
              className='text-white font-semibold bg-deep hover:bg-background-light px-8 py-2 rounded-md interactive-element-1'
            >
              Close
            </motion.button>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

export default Card;
