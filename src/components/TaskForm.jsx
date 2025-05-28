// import { useState } from 'react';
// import { useTask } from '../context/TaskContext';

// const TaskForm = () => {
//   const [task, setTask] = useState('');
//   const { addTask } = useTask();
// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (!task.trim()) return alert('Task cannot be empty');
//   addTask(task.trim());
//   setTask('');
// };


//   return (
//    <form className="task-form" onSubmit={handleSubmit}>
//   <input
//     type="text"
//     value={task}
//     onChange={(e) => setTask(e.target.value)}
//     placeholder="Enter your task"
//   />
//   <button type="submit">Add</button>
// </form>

//   );
// };

// export default TaskForm;
import { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.trim()) return alert('Task cannot be empty');

    try {
      const response = await axios.post('http://localhost:5000/api/tasks', {
        title: task.trim(),
        userId: '664f14258e28254cd8ba2e25', // replace with actual logged-in user's ID
        description: 'No description provided', // optional
      });

      console.log('Task saved:', response.data);
      setTask('');
    } catch (error) {
      console.error('Error saving task:', error.response?.data || error.message);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
