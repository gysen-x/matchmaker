const React = require('react');

module.exports = function Login() {
  return (
    <div className="modal_window" id="modalLogin">
      <div className="modal_content">
        <div className="card">
          <div className="card-header">
            <div className="text-header">Войти</div>
          </div>
          <div className="card-body">
            <form name="loginForm" id="loginForm" className="form-create">
              <div className="form-group">
                <label htmlFor="username">
                  Логин:
                  <input required="" className="form-control" name="username" id="username" type="text" />
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
