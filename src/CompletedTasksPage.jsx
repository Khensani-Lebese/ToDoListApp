import React from 'react';

const CompletedTasksPage = ({ tasks }) => {
  const completedTasks = tasks.filter(task => task.status === 'Complete');

  return (
    <div>
      <h2>Completed Tasks</h2>
      <ul>
        {completedTasks.map(task => (
          <li key={task.id}>
            <strong>{task.name}</strong>
            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Completed on: {task.completedDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTasksPage;
