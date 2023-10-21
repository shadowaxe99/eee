```javascript
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserProfile } from '../services/aiService';

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await getUserProfile(id);
      setProfile(response.data);
    };
    fetchProfile();
  }, [id]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <h2>{profile.username}'s Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Preferences:</strong> {profile.preferences}</p>
      <p><strong>Goals:</strong> {profile.goals}</p>
    </div>
  );
};

export default Profile;
```