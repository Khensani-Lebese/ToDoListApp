import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RegistrationPage from './RegistrationPage.jsx';
import LoginPage from './LoginPage.jsx';
import HomePage from './HomePage.jsx';
import ProfilePage from './ProfilePage.jsx';
import CompletedTasksPage from './CompletedTasksPage.jsx';
import { getUserFromLocalStorage, saveUserToLocalStorage, fetchTasks, loginUser } from './api.jsx';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    dueDate: '',
    priority: '',
    status: ''
  });

  useEffect(() => {
    const savedUser = getUserFromLocalStorage();
    if (savedUser) {
      setIsAuthenticated(true);
      setUser(savedUser);
      fetchTasks().then(fetchedTasks => setTasks(fetchedTasks));
    }
  }, []);

  const handleLogin = async (username, password) => {
    const response = await loginUser({ username, password });
    setIsAuthenticated(true);
    setUser(response.user);
    saveUserToLocalStorage(response.user);
    fetchTasks().then(fetchedTasks => setTasks(fetchedTasks));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
        <Route 
          path="/profile" 
          element={isAuthenticated ? <ProfilePage user={user} setUser={setUser} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/completed-tasks" 
          element={isAuthenticated ? <CompletedTasksPage tasks={tasks} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/home" 
          element={isAuthenticated ? (
            <HomePage
              tasks={tasks}
              setTasks={setTasks}
              filterCriteria={filterCriteria}
              setFilterCriteria={setFilterCriteria}
              handleLogout={handleLogout}
            />
          ) : (
            <Navigate to="/login" />
          )} 
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
