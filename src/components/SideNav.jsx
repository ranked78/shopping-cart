import React, { useState, forwardRef, useImperativeHandle } from 'react';
import '../css/SideNav.css'; // Create a CSS file for styling the sidebar

const SideNav = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  // Expose openNav and closeNav functions via ref
  useImperativeHandle(ref, () => ({
    openNav
  }));

  return (
    <div>
      <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
        <a href="#" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <span
        style={{ fontSize: '30px', cursor: 'pointer' }}
        onClick={openNav}
      >
        &#9776;
      </span>
    </div>
  );
});

export default SideNav;
