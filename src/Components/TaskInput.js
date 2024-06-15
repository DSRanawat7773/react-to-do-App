import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
    addTask(newTask);
    setTaskText('');
  };

  return (
    <div className="task-input">
      <input 
        type="text" 
        value={taskText} 
        onChange={(e) => setTaskText(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
