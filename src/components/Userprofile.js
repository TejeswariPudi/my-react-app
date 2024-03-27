// Userprofile.js

import React from 'react';
import './Userprofile.css'; // Import your updated CSS file for UserProfile styles

const Userprofile = () => {
  // You can fetch user data or use state to manage user information
  const user = {
    username: 'Tejeswari',
    fullName: 'Pudi Tejeswari',
    email: 'tejeswari@gmail.com',
    bio: 'Web Developer',
    profileIcon: '👤', // Set the profile icon using an emoji
    address: 'Jeswitha womens pg, Gachibowli, Hyderabad',
    orders: 1,
    loyaltyPoints: 100,
  };

  return (
    <div className="user-profile-container">
      <h1>User Profile</h1>
      <div className="profile-details-container">
        <div className="profile-icon">
          <span role="img" aria-label="Profile Icon">
            {user.profileIcon}
          </span>
        </div>
        <div className="user-details" style={{ color: '#000' }}>
          <h2>{user.fullName}</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/*<p>Bio: {user.bio}</p>*/}
          <p>Address: {user.address}</p>
          <p>Orders: {user.orders}</p>
          <p>Coupns: {user.loyaltyPoints}</p>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
