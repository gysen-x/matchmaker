const React = require("react");

module.exports = function Contacts({ user }) {
  return (
    <div className="contacts-container wrapper" style={{ display: "none" }}>
      <div className="contacts">
        <div className="contacts__left">
          <h1 className="findUs">Свяжитесь с нами</h1>
          <form id="contactsForm" className="contacts__form">
            <label className="contacts__label">
              {" "}
              <p className="contacts__text">Ваш email</p>
              <input name="email" type="email" className="contacts__input" />
            </label>
            <label className="contacts__label">
              {" "}
              <p className="contacts__text">Тема обращения</p>
              <input name="title" type="text" className="contacts__input" />
            </label>
            <label className="contacts__label">
              {" "}
              <p className="contacts__text">Текст обращения</p>
              <textarea name="text" className="contacts_textarea" />
            </label>
            <button type="submit" className="contacts__button table-button">
              Отправить
            </button>
          </form>
        </div>
        <div id="contactsMap" className="contacts__map" />
      </div>
      <div className="container">
        <h2 className="title contacts__title">Контакты</h2>
        <adress className="contacts__adress">
          <ul className="contacts__list list-reset flex">
            <li className="contacts__item contacts__item-adress flex">
              <strong className="contacts__item-caption">Наш адрес:</strong>
              <p className="contacts__item-text">
                Gang Tanjung Mekar, Jimbaran, South Kuta, Badung Regency, Bali
                80361
              </p>
            </li>
            <li className="contacts__item contacts__item-phone flex">
              <strong className="contacts__item-caption">Телефон:</strong>
              <div className="contacts__link-wrapper">
                <a className="contacts__item-link" href="tel:+79876543210">
                  +7 (987) 654-32-10
                </a>
                <a className="contacts__item-link" href="tel:+71234567890">
                  +7 (123) 456-78-90
                </a>
              </div>
            </li>
            <li className="contacts__item contacts__item-email flex">
              <strong className="contacts__item-caption ">Email</strong>
              <div className="contacts__link-wrapper">
                <a
                  className="contacts__item-link"
                  href="mailto:example@example.com"
                >
                  example@example.com
                </a>
                <a
                  className="contacts__item-link"
                  href="mailto:support@example.com"
                >
                  support@example.com
                </a>
              </div>
            </li>
          </ul>
        </adress>
      </div>
    </div>
  );
};
