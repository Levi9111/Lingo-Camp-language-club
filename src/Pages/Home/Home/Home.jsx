import './Home.css';
import { useState } from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <section className={`${isDarkMode ? 'dark-mode' : 'light-mode'} relative`}>
      <div className="toggle-container absolute z-20">
        <label htmlFor="toggle-mode" className="toggle-label">
          <Toggle
            id="toggle-mode"
            checked={isDarkMode}
            onChange={toggleMode}
            icons={{
              checked: <span className="toggle-icon">&#9790;</span>,
              unchecked: <span className="toggle-icon">&#9728;</span>,
            }}
          />
        </label>
      </div>
      <Banner />
      <div className="md:max-w-[80%] mx-auto">
        <PopularClasses />
        <PopularInstructors />
      </div>
      <Contact />
    </section>
  );
};

export default Home;
