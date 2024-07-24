import React, { useEffect } from 'react';
import TaskForm from './TaskForm.jsx';
import TaskList from './TaskList.jsx';
import TaskFilter from './TaskFilter.jsx';
import { saveTasksToLocalStorage, fetchTasks } from './api.jsx';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ tasks, setTasks, filterCriteria, setFilterCriteria, handleLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks().then(fetchedTasks => setTasks(fetchedTasks));
  }, [setTasks]);

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const completeTask = (taskId) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, status: 'Complete' } : task)));
  };

  const handleViewCompletedTasks = () => {
    navigate('/completed-tasks');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/profile')}>Go to Profile</button>
      <button onClick={handleViewCompletedTasks}>View Completed Tasks</button>
      
      <TaskForm addTask={addTask} />
      <TaskFilter filterCriteria={filterCriteria} setFilterCriteria={setFilterCriteria} />
      <TaskList tasks={tasks} filterCriteria={filterCriteria} updateTask={updateTask} deleteTask={deleteTask} completeTask={completeTask} />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
