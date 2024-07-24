import React from 'react';
import { Link } from 'react-router-dom';



const CompletedTasksPage = ({ tasks }) => {
  const completedTasks = tasks.filter(task => task.status === 'Complete');

  return (
    <div>
      <h1>Completed Tasks</h1>
      <Link to="/home">Back to Home</Link>
      <div className="completed-tasks-list">
        {completedTasks.length > 0 ? (
          completedTasks.map(task => (
            <div key={task.id} className="task-card">
              <h3>{task.name}</h3>
              <p>Description: {task.description}</p>
              <p>Priority: {task.priority}</p>
              <p>Due Date: {task.dueDate}</p>
            </div>
          ))
        ) : (
          <p>No completed tasks found.</p>
        )}
      </div>
    </div>
  );
};

export default CompletedTasksPage;
