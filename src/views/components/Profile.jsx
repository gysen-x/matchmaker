const React = require('react');

module.exports = function Profile({ user }) {
  return (
    <div className="profile-container">
      <div className="profile-data-all">
        <div className="profile-data">{user?.username}</div>
        <div className="profile-data">{user?.email}</div>
        <div className="profile-data">{user?.phone}</div>
      </div>
      <div id="profile-entries" className="tableGrid" />
    </div>

  );
};
