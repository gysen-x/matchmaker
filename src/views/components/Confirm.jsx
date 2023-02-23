const React = require('react');

module.exports = function Confirm() {
  return (
    <div className="modal_window" id="modalConfirm">
      <div className="modal_content">
        <div className="card">
          <div className="card-header">
            <div className="text-header">Подтвердите участие</div>
          </div>
          <div className="card-body">
            <p>
              После нажатия вы подтверждаете участие в матче.
            </p>
            <p>
              В случае если вы не сможете принять участие, пожалуйста, отмените свое участие или уведомите организатора матча.
            </p>
            <div>
              <button data-matchid="" data-userid="" className="join-button table-button" style={{ margin: '0px' }}>Участвовать</button>
              <button className="cancel-button table-button">Отменить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
