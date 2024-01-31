import React from 'react';
import ExperienceEntry from './ExperienceEntry';
import Reveal from '../../components/Reveal';
import experiences from '../../constants/experienceData';

const Experience = () => {
  return (
    <div className="min-h-screen z-10 text-accent">
      <div className="p-10 flex flex-col">
        <div className="md:flex">
          <Reveal>
            <h1 className="text-5xl font-bold underline-offset-6 underline decoration-flame">
              Experience.
            </h1>
          </Reveal>
        </div>
        <div className="mt-6 space-y-12 w-full flex flex-col justify-center">
          {experiences.map((experience) => {
            return <ExperienceEntry experience={experience} />;
          })}
        </div>
        <div />
      </div>
    </div>
  );
};

export default Experience;
