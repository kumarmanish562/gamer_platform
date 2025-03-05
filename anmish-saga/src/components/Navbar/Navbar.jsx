import React from 'react';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div>
      <div className="container py-2 md:py-0">
        <div className="flex items-center justify-between">
          {/* Logo section */}
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="h-16" />
            <p className="text-3xl">VR
              <span className="font-bold">World</span>
            </p>
          </div>
          {/* Desktop menu section */}
          <div>{/* Add menu items here */}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
