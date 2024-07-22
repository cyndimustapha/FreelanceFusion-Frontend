//  src/components/ProfileSummary.jsx
import React from 'react';

const ProfileSummary = ({ profile }) => {
  return (
    <div className="profile-summary">
      <h2>{profile.username}</h2>
      <p>Email: {profile.email}</p>
      <p>Role: {profile.role}</p>
      
    </div>
  );
};

export default ProfileSummary;
