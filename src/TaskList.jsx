
import React, { useState } from 'react';
import './TaskList.css';
import EditTaskForm from './EditTaskForm.jsx';

const TaskList = ({ tasks, updateTask, deleteTask, completeTask }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleEditClick = (taskId) => {
    setEditingTaskId(taskId);
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
  };

  const handleSaveEdit = (updatedTask) => {
    updateTask(updatedTask);
    setEditingTaskId(null);
  };

  const getPriorityClass = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'high-priority';
      case 'medium':
        return 'medium-priority';
      case 'low':
        return 'low-priority';
      default:
        return '';
    }
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className={`task-card ${getPriorityClass(task.priority)}`}>
          {editingTaskId === task.id ? (
            <EditTaskForm
              task={task}
              saveEdit={handleSaveEdit}
              cancelEdit={handleCancelEdit}
            />
          ) : (
            <>
              <h3>{task.name}</h3>
              <p>Description: {task.description}</p>
              <p>Priority: {task.priority}</p>
              <p>Status: {task.status}</p>
              <p>Due Date: {task.dueDate}</p>
              <button onClick={() => completeTask(task.id)}>Complete</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
              <button onClick={() => handleEditClick(task.id)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
