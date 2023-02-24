const React = require("react");

module.exports = function EditProfile({ user }) {
  return (
    <div className="modal_window" id="modalEditProfile">
      <div className="modal_content">
        <div className="card">
          <div className="card-header">
            <div className="text-header">Внести изменения</div>
          </div>
          <div className="card-body">
            <form
              name="editProfileForm"
              id="editProfileForm"
              className="form-create"
            >
              <div className="form-group">
                <label htmlFor="email">
                  Телефон:
                  <input
                    className="form-control"
                    value={user.phoneNumber}
                    name="phoneNumber"
                    id="phoneNumber"
                    type="text"
                    placeholder="Необязательное поле"
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="age">
                  Возраст:
                  <input
                    className="form-control"
                    value={user.age}
                    name="age"
                    id="age"
                    type="number"
                  />
                </label>
              </div>
              <div className="error-wrapper" />
              <input type="submit" className="btn" value="Применить" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
