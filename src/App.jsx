import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TaskProvider, useTask } from './context/TaskContext';
import TasksPage from './pages/TasksPage';
import TimerPage from './pages/TimerPage';
import StatsPage from './pages/StatsPage';
import ThemeToggle from './components/ThemeToggle';
import ErrorBoundary from './utils/ErrorBoundary';
import clsx from 'clsx';
import "./index.css"

function Layout() {
  const { darkMode } = useTask();

  return (
  <div className="app-container">
  <nav className="navbar">
    <div className="links">
      <Link to="/">Tasks</Link>
      <Link to="/timer">Timer</Link>
      <Link to="/stats">Stats</Link>
    </div>
    <ThemeToggle />
  </nav>
  <Routes>
    <Route path="/" element={<TasksPage />} />
    <Route path="/timer" element={<TimerPage />} />
    <Route path="/stats" element={<StatsPage />} />
  </Routes>
</div>

  );
}

function App() {
  return (
    <ErrorBoundary>
      <TaskProvider>
        <Router>
          <Layout />
        </Router>
      </TaskProvider>
    </ErrorBoundary>
  );
}

export default App;
