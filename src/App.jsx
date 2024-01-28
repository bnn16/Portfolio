import React, { useState } from 'react';
import Home from './sections/Home';
import Header from './sections/Header';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-deep text-accent">
      <Header />
      <Home />
      <Experience />
      <Projects setOpen={setOpen} />
      {open ? null : <Contact />}
    </div>
  );
}

export default App;
