const React = require('react');

module.exports = function Profile({ user }) {
  return (
    <div className="profile-container wrapper" style={{ display: 'none' }}>
      <div className="profile-data-all">
        <h2 className="profile__title">Личный кабинет</h2>
        <input className="btn" id="editProfile" value="Изменить" />
        <div className="profile__left">
          <div className="profile-data">
            <p className="profile__data-title">Логин</p>
            <p className="profile__data-text">{user?.username}</p>
          </div>
          <div className="profile-data">
            <p className="profile__data-title">Email</p>
            <p className="profile__data-text">{user?.email}</p>
          </div>
          <div className="profile-data">
            <p className="profile__data-title">Телефон</p>
            <p className="profile__data-text">{user?.phoneNumber}</p>
          </div>
          <div className="profile-data">
            <p className="profile__data-title">Пол</p>
            <p className="profile__data-text">{user?.gender}</p>
          </div>
          <div className="profile-data">
            <p className="profile__data-title">Возраст</p>
            <p className="profile__data-text">{user?.age}</p>
          </div>
        </div>
        <div className="profile__picture" />
      </div>
      <div className="profile-entries__wrapper">
        <h2 className="profile-entries__title">Активные матчи</h2>
        <div id="profile-entries" className="tableGrid" />
      </div>
    </div>
  );
};
