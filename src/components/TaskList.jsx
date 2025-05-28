
import { useTask } from '../context/TaskContext';

const TaskList = () => {
  const { tasks, updateTaskStatus } = useTask();

  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        tasks.map((task, index) => (
          <li key={index} className="task-item">
            <div>
              <strong>{task.name}</strong>
              <div style={{ fontSize: '12px', color: '#888' }}>{task.createdAt.toLocaleString()}</div>
            </div>

            <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
              <button
                onClick={() => updateTaskStatus(index, 'seen')}
                style={{
                  backgroundColor: task.seen ? '#facc15' : '#fef3c7',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                {task.seen ? 'Seen ✅' : 'Seen'}
              </button>

              <button
                onClick={() => updateTaskStatus(index, 'completed')}
                style={{
                  backgroundColor: task.completed ? '#4ade80' : '#d1fae5',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                {task.completed ? 'Completed ✅' : 'Complete'}
              </button>

              <button
                onClick={() => updateTaskStatus(index, 'checked')}
                style={{
                  backgroundColor: task.checked ? '#3b82f6' : '#dbeafe',
                  color: task.checked ? '#fff' : '#000',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                {task.checked ? 'Checked ✅' : 'Check'}
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default TaskList;
