import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import Section from './pages/Section';
import Footer from './components/Footer';

function App() {
  const sideNavRef = useRef();

  const handleOpenNav = () => {
    sideNavRef.current.openNav();
  };

  const handleCloseNav = () => {
    sideNavRef.current.closeNav();
  };

  return (
    <>
      <Navbar />
      {/* Pass the ref to SideNav */}
      <SideNav ref={sideNavRef} />
      <Section />
      <Footer />
      <button onClick={handleOpenNav}>Open Nav</button>
      <button onClick={handleCloseNav}>Close Nav</button>
    </>
  );
}

export default App;
