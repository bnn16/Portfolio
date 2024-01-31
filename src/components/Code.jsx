import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import PropTypes from 'prop-types';

const Code = ({ description, language, json }) => {
  return (
    <>
      <p>{description}</p>
      <SyntaxHighlighter language={language} style={twilight}>
        {json.trim()}
      </SyntaxHighlighter>
    </>
  );
};

Code.propTypes = {
  description: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  json: PropTypes.string.isRequired,
};

export default Code;
