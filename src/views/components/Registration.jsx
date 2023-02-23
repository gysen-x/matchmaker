const React = require('react');

module.exports = function Registration() {
  return (
    <div className="modal_window" id="modalRegistration">
      <div className="modal_content">
        <div className="card">
          <div className="card-header">
            <div className="text-header">Регистрация</div>
          </div>
          <div className="card-body">
            <form name="registrationForm" id="registrationForm" className="form-create">
              <div className="form-group">
                <label htmlFor="username">
                  Логин:
                  <input required="" className="form-control" name="username" id="username" type="text" />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  Email:
                  <input required="" className="form-control" name="email" id="email" type="email" />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  Телефон:
                  <input className="form-control" name="phoneNumber" id="phoneNumber" type="text" placeholder="Необязательное поле" />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="gender">
                  Пол:
                  <select className="form-control" name="gender" id="gender">
                    <option value="муж">Муж</option>
                    <option value="муж">Жен</option>
                  </select>
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="age">
                  Возраст:
                  <input className="form-control" name="age" id="age" type="number" />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  Пароль:
                  <input required="" className="form-control" name="password" id="password" type="password" />
                </label>
              </div>
              <div className="error-wrapper" />
              <input type="submit" className="btn" value="Принять" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
