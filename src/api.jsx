// api.jsx

// Get user data from local storage
export const getUserFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('user'));
  };
  
  // Save user data to local storage
  export const saveUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };
  
  // Fetch tasks from local storage
  export const fetchTasks = async () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  };
  
  // Save tasks to local storage
  export const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  
  // Register user by saving the user data in local storage
  export const registerUser = async (user) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  };
  
  // Login user by checking the credentials against the stored users
  export const loginUser = async ({ username, password }) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      return { user };
    } else {
      throw new Error('Invalid credentials');
    }
  };
  