import React from 'react';
import PropTypes from 'prop-types';
import Reveal from '../../components/Reveal';
import Badge from '../../components/Badge';

const ExperienceEntry = ({
  experience,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Reveal>
          <h2 className="text-3xl font-semibold">{experience.title}</h2>
        </Reveal>
        <Reveal>
          <div className="text-right">
            <div className="text-lg font-medium">{experience.period}</div>
            <div className="text-sm">{experience.location}</div>
          </div>
        </Reveal>
      </div>
      <Reveal>
        <h3 className="text-xl font-medium mt-2">{experience.role}</h3>
      </Reveal>
      <Reveal>
        <p className="mt-2">{experience.description}</p>
      </Reveal>
      <Reveal>
        <div className="flex flex-wrap gap-4 mt-4">
          {experience.skills.map((skill) => {
            return <Badge text={skill} />;
          })}
        </div>
      </Reveal>
    </div>
  );
};

ExperienceEntry.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string,
    period: PropTypes.string,
    location: PropTypes.string,
    role: PropTypes.string,
    description: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ExperienceEntry;
