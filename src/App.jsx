import React, { useState } from 'react';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Footer/Contact';

const App = () => {
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
};

export default App;
