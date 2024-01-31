import React from 'react';
import Reveal from '../../components/Reveal';
import MiniCard from '../../components/MiniCard';

const ProjectEntries = ({
  projectData, currentPage, totalItems, expandedIndex, handleMiniCardClick,
}) => {
  const itemsPerPage = 6;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  return projectData.slice(startIndex, endIndex).map((data, i) => {
    const cardIndex = startIndex + i;
    return (
      <div key={cardIndex}>
        <Reveal>
          <MiniCard
            title={data.title}
            icon={data.icon}
            key={cardIndex}
            isExpanded={expandedIndex === cardIndex}
            onClick={() => handleMiniCardClick(cardIndex)}
          />
        </Reveal>
      </div>
    );
  });
};

export default ProjectEntries;
