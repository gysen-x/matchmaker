const React = require('react');

module.exports = function Tournaments({ user }) {
  return (
    <div className="tournaments-container wrapper" style={{ display: 'none' }}>
      <div className="tournament">
        <h2 className="tournament__title">Турниры</h2>
        <ul className="tournament__list" id="tournamentList" />
      </div>
    </div>
  );
};
