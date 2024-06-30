import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import Section from './pages/Section';
import Footer from './components/Footer';

function App() {
  const sideNavRef = useRef();


  return (
    <>
      <Navbar sideNavRef={sideNavRef}  />
      {/* Pass the ref to SideNav */}
      <SideNav ref={sideNavRef} />
      <Section />
      <Footer />
    </>
  );
}

export default App;
