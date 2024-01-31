/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import levenshteinDistance from '../../helpers/searchHelper';
import Reveal from '../../components/Reveal';

const ProjectSearch = ({ projectData, setProjectData }) => {
  const originalProjectData = useMemo(() => projectData, []);
  const [searchValue, setSearchValue] = useState('');

  const lowerSearchValue = searchValue.toLowerCase();

  const handleSearch = debounce((e) => {
    if (e.target.value === '') setSearchValue('');
    else {
      const filteredProjects = originalProjectData.filter((project) => {
        const tagsIncluded = project.tags?.some((tag) => tag.toLowerCase().includes(lowerSearchValue));
        if (tagsIncluded) return true;

        const projectName = project.title.toLowerCase().replace(/\s/g, '');
        if (projectName.includes(lowerSearchValue)) return true;

        // levenshtein distance is not perfect, but it's good enough for this use case
        // https://en.wikipedia.org/wiki/Levenshtein_distance
        const distance = levenshteinDistance(lowerSearchValue, projectName);
        return distance <= 5 || distance / projectName.length <= 0.4;
      });
      setProjectData(filteredProjects);
    }
  }, 1500);

  // cleanup after unmount to prevent memory leak react documentation
  useEffect(() => {
    return () => handleSearch.cancel();
  }, []);

  useEffect(() => {
    setProjectData(originalProjectData);
  }, [searchValue]);

  return (
    <form className="flex items-center my-12">
      <div className="relative w-full">
        <Reveal className="w-screen">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-flame" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
            </svg>
          </div>
          <input
            onChange={(e) => {
              setSearchValue(e.target.value);
              handleSearch(e);
            }}
            type="text"
            id="simple-search"
            placeholder="Search project name, technology or tag..."
            className="bg-deep border border-flame-dark text-accent text-sm rounded-lg focus:ring-flame focus:border-blue-500 block w-full ps-10 p-2.5"
            required
          />
        </Reveal>
      </div>
    </form>

  );
};

ProjectSearch.propTypes = {
  projectData: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProjectData: PropTypes.func.isRequired,
};

export default ProjectSearch;
