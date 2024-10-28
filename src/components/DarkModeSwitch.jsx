import React, { useEffect, useState } from 'react';

const DarkModeSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark' || false;
    });

    useEffect(() => {
       
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        
    }, [isDarkMode]); 

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <label className="switch" aria-labelledby="darkmode switch">
          <input id="darkmode-switch" type="checkbox" checked={isDarkMode} onChange={toggleDarkMode}/>
          <span className="slider"></span>
        </label>
    );
};


export default DarkModeSwitch