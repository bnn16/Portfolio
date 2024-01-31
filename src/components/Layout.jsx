/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children, title, sections }) => {
  return (
    <div className="container mt-12 mx-auto p-8">
      <div className="text-left lg:text-justify md:text-justify sm:text-left mx-4">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>

        {sections
          && sections.map((section) => (
            <section key={`${section.title} `} className="mb-8">
              {section.title && (
                <h2 className="font-bold text-xl text-flame mb-4">
                  {section.title}
                </h2>
              )}
              {section.content && <div>{section.content}</div>}
            </section>
          ))}
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  sections: PropTypes.array.isRequired,
};

export default Layout;
