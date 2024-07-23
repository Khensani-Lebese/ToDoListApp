import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, updateTask, deleteTask, completeTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <h3>{task.name}</h3>
          <p>Description: {task.description}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>
          <p>Due Date: {task.dueDate}</p>
          <button onClick={() => completeTask(task.id)}>Complete</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
