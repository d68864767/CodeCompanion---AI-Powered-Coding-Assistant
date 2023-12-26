```javascript
import React, { useState, useEffect } from 'react';

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    setUsers(data);
  };

  return (
    <div className="User">
      <header className="User-header">
        <h1>User Preferences</h1>
      </header>
      <main>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <h2>{user.name}</h2>
                <p>Preferences: {user.preferences}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found.</p>
        )}
      </main>
    </div>
  );
}

export default User;
```
</p>