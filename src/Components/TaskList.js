import React, { useState } from 'react';

const TaskList = ({ tasks, removeTask, toggleComplete }) => {
  const [sortOrder, setSortOrder] = useState('default');
  const [filter, setFilter] = useState('all');

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortOrder === 'asc') return a.text.localeCompare(b.text);
    if (sortOrder === 'desc') return b.text.localeCompare(a.text);
    return 0;
  });

  const filteredTasks = sortedTasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="task-list">
      <div className="task-filters">
        <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
          Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
        </button>
        <button onClick={() => setFilter(filter === 'all' ? 'completed' : filter === 'completed' ? 'incomplete' : 'all')}>
          {filter === 'all' ? 'Show Completed' : filter === 'completed' ? 'Show Incomplete' : 'Show All'}
        </button>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
