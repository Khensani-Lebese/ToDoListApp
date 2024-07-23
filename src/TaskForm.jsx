import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('Incomplete');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      name: taskName,
      description,
      priority,
      status,
      dueDate
    };
    addTask(newTask);
    saveTaskToLocalStorage(newTask);
    setTaskName('');
    setDescription('');
    setPriority('Medium');
    setStatus('Incomplete');
    setDueDate('');
  };

  const saveTaskToLocalStorage = (task) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
        <p>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        </p>
        <p>Priority:<select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        </p>
        <p>Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Incomplete">Incomplete</option>
          <option value="Complete">Complete</option>
        </select>
        </p>
        <p>Due date:
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        </p>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
