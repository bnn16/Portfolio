import useLockBodyScroll from '@custom-react-hooks/use-lock-body-scroll';
import { motion } from 'framer-motion';
import PortfolioPage from '../pages/PortfolioPage';

const components = {
  portfolio: PortfolioPage,
  // ordina: OrdinaPage,
  // youtubey: YoutubeyPage,
  // grpc: GrpcPage,
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

  const containerStyles =
    'fixed inset-0 overflow-y-auto min-w-36 flex items-center justify-center bg-deep bg-opacity-0';

  const innerContainerStyles = {
    width: '100%',
    maxWidth: '800px', // Set a maximum width as per your design
    maxHeight: '80vh', // Set a maximum height as per your design
    overflowY: 'auto',
  };

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
          'text-justify mt-4 border rounded-lg border-flame-dark border-opacity-80 bg-background-dark p-4'
        }
        style={innerContainerStyles}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from triggering the background click
      >
        <ComponentToRender />
      </div>
    </motion.div>
  );
}

export default Card;
