import React from 'react'


export const BaseCard = ({ profilePic, profilename }) => {
    return (
      <div className="card">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="info">
          <h2>{profilename}</h2>
        </div>
      </div>
    );
};
