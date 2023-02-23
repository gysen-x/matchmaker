const React = require("react");

module.exports = function CreateMatch({ user, sports }) {
  return (
    <div className="modal_window" id="modalCreateMatch">
      <div className="modal_content">
        <div className="card">
          <div className="card-header">
            <div className="text-header">Создать матч</div>
          </div>
          <div className="card-body">
            <form
              name="createMatchForm"
              id="createMatchForm"
              className="form-create"
            >
              <div className="form-group">
                <label htmlFor="sport_id">
                  Категория:
                  <select
                    className="form-control"
                    name="sport_id"
                    id="sport_id"
                  >
                    {sports.map((el) => (
                      <option value={el.id} key={el.id}>
                        {el.title}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="game">
                  Вид спорта:
                  <input
                    required=""
                    className="form-control"
                    name="game"
                    id="game"
                    type="text"
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="date">
                  Время начала:
                  <input
                    required=""
                    className="form-control"
                    name="date"
                    id="date"
                    type="datetime-local"
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="date_end">
                  Время окончания:
                  <input
                    required=""
                    className="form-control"
                    name="date_end"
                    id="date_end"
                    type="datetime-local"
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="country">
                  Страна:
                  <input
                    required=""
                    className="form-control"
                    name="country"
                    id="country"
                    type="text"
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="city">
                  Город:
                  <input
                    required=""
                    className="form-control"
                    name="city"
                    id="city"
                    type="text"
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="address">
                  Адрес:
                  <input
                    required=""
                    className="form-control"
                    name="address"
                    id="address"
                    type="text"
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="conditions">
                  Условия участия:
                  <input
                    required=""
                    className="form-control"
                    name="conditions"
                    id="conditions"
                    type="text"
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="contacts">
                  Контакты:
                  <input
                    required=""
                    className="form-control"
                    name="contacts"
                    id="contacts"
                    type="text"
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="max_players">
                  Количество игроков:
                  <input
                    required=""
                    className="form-control"
                    name="max_players"
                    id="max_players"
                    type="number"
                    min="0"
                    max="1000"
                  />
                </label>
              </div>
              <div className="form-group" style={{ display: "none" }}>
                <label htmlFor="admin_id">
                  admin_id:
                  <input
                    required=""
                    className="form-control"
                    name="admin_id"
                    id="admin_id"
                    type="number"
                    value={user?.id}
                  />
                </label>
              </div>
              <div className="error-wrapper" />
              <input type="submit" className="btn" value="Создать" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
