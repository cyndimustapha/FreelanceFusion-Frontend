// src/components/Notifications.jsx
import React from 'react';

const Notifications = ({ notifications }) => {
  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>
            <p>{notification.message}</p>
            {/* Add more notification details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;