import Home from './sections/Home';
import Header from './sections/Header';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className='bg-deep text-accent'>
      <Header />
      <Home />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
