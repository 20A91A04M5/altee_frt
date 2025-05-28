
import { createContext, useContext, useState } from 'react';

const TaskContext = createContext();


export const useTask = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addTask = (taskName) => {
    const newTask = {
      name: taskName,
      createdAt: new Date(),
      seen: false,
      completed: false,
      checked: false,
    };
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (index, statusKey) => {
    const updated = [...tasks];
    updated[index][statusKey] = !updated[index][statusKey];
    setTasks(updated);
  };

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTaskStatus, darkMode, toggleDarkMode }}>
      {children}
    </TaskContext.Provider>
  );
};
