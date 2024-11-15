import React, { useEffect, useState } from 'react';

const DarkModeSwitch = () => {
    const storedTheme = () => {
        const localTheme = localStorage.getItem("theme")

        if (localTheme) {
            return localTheme === "dark"
        }
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    }
    const [isDarkMode, setIsDarkMode] = useState(storedTheme)

console.log(storedTheme)
    useEffect(() => {

        document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light")
        localStorage.setItem("theme", isDarkMode ? "dark" : "light")

    }, [isDarkMode])

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <label aria-label="darkmode switch" className="switch">
            <input id="darkmode-switch" type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
            <span className="slider"></span>
        </label>
    )
}


export default DarkModeSwitch