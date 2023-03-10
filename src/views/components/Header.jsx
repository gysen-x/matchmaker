const React = require('react');

module.exports = function Header({ user }) {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="nav">
          <ul className="nav__list">

            {
                user ? (
                  <li className="nav__item">
                    <a id="createMatchLink" className="nav__link" href="#">
                      Создать матч
                    </a>
                  </li>
                ) : (
                  <li className="nav__item">
                    <a id="secondLoginLink" className="nav__link" href="#">
                      Создать матч
                    </a>
                  </li>
                )
              }

            <li className="nav__item">
              <a id="findMatchLink" className="nav__link" href="#">
                Найти матч
              </a>
            </li>
            <li className="nav__item">
              <a id="champLink" className="nav__link" href="#">
                Турниры
              </a>
            </li>
            <li className="nav__item nav__name">
              <h1
                className="nav__title"
                id="homepage"
                style={{ cursor: 'pointer' }}
              >
                Matchmaker
              </h1>
            </li>
            <li className="nav__item">
              <a id="contactsLink" className="nav__link" href="#">
                Контакты
              </a>
            </li>
            {user ? (
              <>
                <li className="nav__item">
                  <a
                    id="user-account"
                    className="nav__link"
                    href="#"
                    data-userid={user.id}
                  >
                    {user.username}
                  </a>
                </li>
                <li className="nav__item">
                  <a id="logoutLink" className="nav__link" href="#">
                    Выход
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav__item">
                  <a id="loginLink" className="nav__link" href="#">
                    Вход
                  </a>
                </li>
                <li className="nav__item">
                  <a id="regLink" className="nav__link" href="#">
                    Регистрация
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};
