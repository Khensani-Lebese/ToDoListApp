import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm.jsx';
import TaskList from './TaskList.jsx';
import TaskFilter from './TaskFilter.jsx';

const HomePage = ({ filterCriteria, setFilterCriteria, handleLogout }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const addTask = (task) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, task];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const completeTask = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => (task.id === taskId ? { ...task, status: 'Complete' } : task));
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
      <TaskForm addTask={addTask} />
      <TaskFilter filterCriteria={filterCriteria} setFilterCriteria={setFilterCriteria} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} completeTask={completeTask} />
    </div>
  );
};

export default HomePage;
