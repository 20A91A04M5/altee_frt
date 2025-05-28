
import { useTask } from '../context/TaskContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useEffect } from 'react';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTask();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <button onClick={toggleDarkMode} className="theme-toggle">
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
