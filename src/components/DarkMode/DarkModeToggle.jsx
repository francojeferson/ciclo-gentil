import React, { useEffect, useState } from "react";
import styles from "./DarkModeToggle.module.css";

const DarkModeToggle = () => {
  // set initial state to false (light mode)
  const [isDarkMode, setIsDarkMode] = useState(()=>document.body.classList.contains('dark'));

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button className={styles.button} onClick={toggleDarkMode} aria-label="Toggle dark mode">
      {isDarkMode ? (
        // in dark mode, show sun icon (to switch to light mode)
        <svg className={styles.icon} viewBox="0 0 24 24">
          <path d="M12 4.5a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zM12 17.5a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zM4.5 11a1 1 0 011 1h1a1 1 0 010-2h-1a1 1 0 01-1 1zM17.5 11a1 1 0 011 1h1a1 1 0 010-2h-1a1 1 0 01-1 1zM5.64 5.64a1 1 0 011.41 0l.71.71a1 1 0 01-1.41 1.41l-.71-.71a1 1 0 010-1.41zM16.24 16.24a1 1 0 011.41 0l.71.71a1 1 0 01-1.41 1.41l-.71-.71a1 1 0 010-1.41zM5.64 18.36a1 1 0 010-1.41l.71-.71a1 1 0 011.41 1.41l-.71.71a1 1 0 01-1.41 0zM16.24 7.76a1 1 0 010-1.41l.71-.71a1 1 0 011.41 1.41l-.71.71a1 1 0 01-1.41 0zM12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ) : (
        // in light mode, show moon icon (to switch to dark mode)
        <svg className={styles.icon} viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
};

export default DarkModeToggle;
