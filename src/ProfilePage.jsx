import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({ user, setUser }) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, username, email });
    // Add API call to update user profile if needed
    alert('Profile updated successfully!');
  };

  const handleBackClick = () => {
    navigate('/home');
  };

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <p>
          Username:
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </p>
        <p>
          Email:
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>
        <button type="submit">Update Profile</button>
      </form>
      <button onClick={handleBackClick}>Back to Home</button>
    </div>
  );
};

export default ProfilePage;
