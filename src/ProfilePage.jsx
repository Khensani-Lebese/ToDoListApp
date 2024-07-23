import React, { useState } from 'react';

const ProfilePage = ({ user, setUser }) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, username, email });
    // Add API call to update user profile if needed
  };

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;
