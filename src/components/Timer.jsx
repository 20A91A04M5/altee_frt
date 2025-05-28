
import { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);
  const [actions, setActions] = useState([]);

  useEffect(() => {
    const timer = active && setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, [active]);

  const handleStart = () => {
    if (!active) {
      setActive(true);
      setActions((prev) => [...prev, `Started at ${new Date().toLocaleTimeString()}`]);
    }
  };

  const handlePause = () => {
    if (active) {
      setActive(false);
      setActions((prev) => [...prev, `Paused at ${new Date().toLocaleTimeString()} (${seconds}s)`]);
    }
  };

  const handleStop = () => {
    if (active || seconds > 0) {
      setActive(false);
      setActions((prev) => [...prev, `Stopped at ${new Date().toLocaleTimeString()} (Final: ${seconds}s)`]);
      setSeconds(0);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
      <div className="timer-container">
        <div className="timer-display">{seconds}s</div>
        <div className="timer-buttons">
          <button onClick={handleStart} disabled={active}>
            Start
          </button>
          <button onClick={handlePause} disabled={!active}>
            Pause
          </button>
          <button onClick={handleStop} disabled={!active && seconds === 0}>
            Stop
          </button>
        </div>
      </div>

      <div
        className="action-log"
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          borderRadius: '5px',
          width: '250px',
          height: '150px',
          color:'black',
          overflowY: 'auto',
          fontFamily: 'monospace',
          backgroundColor: '#f5f5f5',
        }}
      >
        <h4>Action Log</h4>
        {actions.length === 0 ? (
          <p>No actions yet</p>
        ) : (
          <ul>
            {actions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Timer;
