import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Code({ description, language, json }) {
  return (
    <>
      <p>{description}</p>
      <SyntaxHighlighter language={language} style={twilight} showLineNumbers>
        {json.trim()}
      </SyntaxHighlighter>
    </>
  );
}

export default Code;
