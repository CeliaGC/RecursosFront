import React from 'react';

 const ChildComponent = ({ user, isLoged}) => {
  return (
    <div>
      {isLoged ? (
        <div>
          <h1>User Profile</h1>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
}

export default ChildComponent;
