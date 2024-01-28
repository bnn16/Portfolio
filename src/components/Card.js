import useLockBodyScroll from '@custom-react-hooks/use-lock-body-scroll';
import { motion } from 'framer-motion';
import PortfolioPage from '../pages/PortfolioPage';
import OrdinaPage from '../pages/OrdinaPage';
import YoutubeyPage from '../pages/YoutubeyPage';
import GrpcPage from '../pages/GrpcPage';
import { FaWindowClose } from 'react-icons/fa';
import { X } from 'react-feather';

const components = {
  portfolio: PortfolioPage,
  ordina: OrdinaPage,
  youtubey: YoutubeyPage,
  grpc: GrpcPage,
  // webscraper: WebscraperPage,
  // eventplatform: EventPlatformPage,
  // library: LibraryPage,
  // highschool: HighSchoolPage,
  // number: NumberPage,
};

function Card({ onClick, data }) {
  const id = data.id;
  const ComponentToRender = components[id];

  useLockBodyScroll(true);

  const closeButtonContainerStyles = {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'sticky',
    top: '1rem',
  };

  const closeButtonStyles = {
    cursor: 'pointer',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  if (window.innerWidth < 600) {
    closeButtonContainerStyles.top = '0.5rem';
    closeButtonStyles.fontSize = '1rem';
  }

  const containerStyles =
    'fixed inset-0 overflow-y-auto min-w-20 flex items-center justify-center bg-deep bg-opacity-0';

  const innerContainerClasses =
    'w-full sm:max-w-2xl md:max-w-4xl lg:max-w-3xl min-w-1/4 max-h-screen overflow-auto';

  const animated = {
    layout: 'position',
    animate: { opacity: 1, scale: 1.1 },
    transition: { delay: 0.3 },
    initial: { opacity: 0, scale: 1 },
  };

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('bg-deep')) {
      onClick();
    }
  };

  return (
    <motion.div
      {...animated}
      className={containerStyles}
      layout
      onClick={handleBackgroundClick}
    >
      <div
        className={
          'text-justify border relative rounded-lg border-flame-dark border-opacity-80 bg-background-dark p-4 ' +
          innerContainerClasses
        }
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from triggering the background click
      >
        <div style={closeButtonContainerStyles} className='sm:sticky lg:static'>
          <button
            className='text-xl mt-10 mr-4 font-bold text-flame hover:text-accent transition-colors duration-200'
            onClick={onClick}
            style={closeButtonStyles}
          >
            {<X size={24} />}
          </button>
        </div>
        <div className='w-full sm:w-2/3 lg:w-9/12 mx-auto'>
          <ComponentToRender />
        </div>
      </div>
    </motion.div>
  );
}
export default Card;
