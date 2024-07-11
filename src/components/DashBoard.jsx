import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FreelancerDashboard from './FreelancerDashboard';
import ClientDashboard from './ClientDashboard';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get('/api/user');
      setUser(response.data);
    };
    fetchUser();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      {user.role === 'freelancer' ? <FreelancerDashboard user={user} /> : <ClientDashboard user={user} />}
    </div>
  );
};

export default Dashboard;
