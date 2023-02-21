const React = require('react');

module.exports = function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <ul className="nav__list">
            <li className="nav__item"><a className="nav__link" href="#">Создать матч</a></li>
            <li className="nav__item"><a className="nav__link" href="#">Найти матч</a></li>
            <li className="nav__item"><a className="nav__link" href="#">Турниры</a></li>
            <li className="nav__item nav__name">
              <h1 className="nav__title">Matchmaker</h1>
            </li>
            <li className="nav__item"><a className="nav__link" href="#">Вход</a></li>
            <li className="nav__item"><a className="nav__link" href="#">Регистрация</a></li>
            <li className="nav__item"><a className="nav__link" href="#">Контакты</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};
