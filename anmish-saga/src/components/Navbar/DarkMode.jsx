import React, { useEffect, useState } from 'react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return (
    <>
      {theme === 'dark' ? (
        <BiSolidSun className="text-2xl cursor-pointer" onClick={() => setTheme('light')} />
      ) : (
        <BiSolidMoon className="text-2xl cursor-pointer" onClick={() => setTheme('dark')} />
      )}
    </>
  );
};

export default DarkMode;
