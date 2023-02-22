const React = require("react");

module.exports = function Contacts({ user }) {
  return (
    <div className="contacts-container wrapper" style={{ display: "none" }}>
      <div className="contacts">
        <div className="contacts__left">
          <h1 className="findUs">Где нас найти?</h1>
          <h2 className="backForm">Форма обратной связи</h2>
          <form className="contacts__form">
            <label className="contacts__label">
              {" "}
              <p className="contacts__text">Ваш email</p>
              <input type="email" className="contacts__input" />
            </label>
            <label className="contacts__label">
              {" "}
              <p className="contacts__text">Тема обращения</p>
              <input type="text" className="contacts__input" />
            </label>
            <label className="contacts__label contacts_textarea">
              {" "}
              <p className="contacts__text">Текст обращения</p>
              <textarea className="contacts__input contacts_textarea" />
            </label>
            <button type="submit" className="contacts__button">
              Отправить
            </button>
          </form>
        </div>
        <div id="contactsMap" className="contacts__map" />
      </div>
    </div>
  );
};
