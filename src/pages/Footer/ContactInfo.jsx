import React from 'react';
import PropTypes from 'prop-types';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactInfo = ({
  iconName, label, link, text,
}) => {
  const iconMap = {
    email: <FaEnvelope />,
    linkedin: <FaLinkedin />,
    git: <FaGithub />,
  };

  const icon = iconMap[iconName];

  return (
    <div className="flex flex-col items-center space-x-4 md:space-x-8">
      <div className="flex flex-row space-x-4">
        {icon && <div className="text-xl text-flame">{icon}</div>}
        <span>
          {label}
          :
        </span>
      </div>
      <a href={link} className="text-flame hover:underline" target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </div>
  );
};

ContactInfo.propTypes = {
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ContactInfo;
