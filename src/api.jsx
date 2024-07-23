// api.js
export const registerUser = async (userData) => {
    // Mock API request
    console.log('Registering user:', userData);
    return Promise.resolve();
  };
  
  export const loginUser = async (credentials) => {
    // Mock API request
    console.log('Logging in:', credentials);
    return Promise.resolve({ token: 'fake-jwt-token', user: { username: credentials.username } });
  };
  
  export const getUserFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('user'));
  };
  
  export const saveUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };
  
  export const fetchTasks = async () => {
    // Mock API request
    console.log('Fetching tasks');
    return Promise.resolve([]);
  };
  
  export const addTask = async (task) => {
    // Mock API request
    console.log('Adding task:', task);
    return Promise.resolve();
  };
  
  export const updateTask = async (task) => {
    // Mock API request
    console.log('Updating task:', task);
    return Promise.resolve();
  };
  
  export const deleteTask = async (taskId) => {
    // Mock API request
    console.log('Deleting task:', taskId);
    return Promise.resolve();
  };
  
  export const markTaskAsCompleted = async (taskId) => {
    // Mock API request
    console.log('Marking task as completed:', taskId);
    return Promise.resolve();
  };
  