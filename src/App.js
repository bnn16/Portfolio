import Home from './sections/Home';
import Header from './sections/Header';
import Experience from './sections/Experience';
import Projects from './sections/Projects';

function App() {
  return (
    <div className='bg-deep text-accent'>
      <Header />
      <Home />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
