import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Packages from './Pages/Packages';
import Contact from './Pages/Contact';
import Client from './Pages/Client.jsx';
import Mail from './Pages/Mail.jsx';
import Landing from './Pages/Landing.jsx';

import { useEffect, useRef } from 'react';

function ScrollToSection() {
  const location = useLocation();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const packagesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const path = location.pathname;
    const sectionMap = {
      '/': homeRef,
      '/about': aboutRef,
      '/packages': packagesRef,
      '/contact': contactRef
    };
    const sectionRef = sectionMap[path];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <NavBar />
      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={packagesRef}><Packages /></div>
      <div ref={contactRef}><Contact /></div>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToSection />
      <Client/>
      <Mail/>
      <Landing/>
    </Router>
  );
}

export default App;
