import React, { useState } from 'react';
import PropTypes from 'prop-types';
import projectDataShort from '../../constants/ProjectData';
import Reveal from '../../components/Reveal';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import ProjectEntries from './ProjectEntries';
import CarrouselButtons from '../../components/CarrouselButtons';

const Projects = ({ setOpen }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [projectData, setProjectData] = useState(projectDataShort);
  const itemsPerPage = 6;
  const totalItems = projectData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleMiniCardClick = (index) => {
    setOpen(true);
    const scrollingElement = document.scrollingElement || document.body;
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
    setExpandedIndex(index);
  };

  const handleCardClose = () => {
    setOpen(false);
    setExpandedIndex(null);
  };

  const handlePreviousClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  return (
    <div className="z-10 min-h-screen text-accent relative">
      <div className={`p-10 ${expandedIndex !== null ? 'blur' : ''}`}>
        <div className="flex flex-col">
          <Reveal>
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold underline-offset-6 underline decoration-flame">
              Projects.
            </h1>
          </Reveal>
        </div>
        <div className="flex flex-wrap justify-evenly gap-y-8 sm:gap-y-12 lg:gap-y-16 gap-x-4 sm:gap-x-8 lg:gap-x-12 mt-6 sm:mt-12 lg:mt-20">
          <ProjectEntries
            projectData={projectData}
            currentPage={currentPage}
            totalItems={totalItems}
            expandedIndex={expandedIndex}
            handleMiniCardClick={handleMiniCardClick}
          />
        </div>
        <CarrouselButtons
          currentPage={currentPage}
          totalPages={totalPages}
          handlePreviousClick={handlePreviousClick}
          handleNextClick={handleNextClick}
        />
      </div>

      {expandedIndex !== null && (
      <Modal>
        <Card onClick={handleCardClose} data={projectData[expandedIndex]} />
      </Modal>
      )}
    </div>
  );
};

Projects.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default Projects;
