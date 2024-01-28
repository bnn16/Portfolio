import React from 'react';

function Layout({ children, title, sections }) {
  return (
    <div className='container mx-auto p-8'>
      <div className='text-left lg:text-justify md:text-justify sm:text-left mx-4'>
        <h1 className='text-4xl font-bold mb-2'>{title}</h1>

        {sections &&
          sections.map((section, index) => (
            <section key={index} className='mb-8'>
              {section.title && (
                <h2 className='font-bold text-xl text-flame mb-4'>
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
}

export default Layout;
