
import { useTask } from '../context/TaskContext';

const Statistics = () => {
  const { tasks } = useTask();

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className="stats-container">
      <h2>Remaining Tasks: {remainingTasks}</h2>
      {remainingTasks === 0 && <p>🎉 All tasks are completed!</p>}
    </div>
  );
};

export default Statistics;
