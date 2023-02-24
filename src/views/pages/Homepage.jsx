const React = require('react');
const CreateMatch = require('../components/CreateMatch');
const Layout = require('../components/Layout');
const Login = require('../components/Login');
const Profile = require('../components/Profile');
const Registration = require('../components/Registration');
const Contacts = require('../components/Contacts');
const Confirm = require('../components/Confirm');
const Tournaments = require('../components/Tournaments');

function Homepage({ user, sports }) {
  return (
    <Layout user={user}>
      <Profile user={user} />
      <Contacts user={user} />
      <Tournaments user={user} />
      <div className="wrapper findMatchListner">
        <div
          className="tableGrid"
          id="table_header"
          style={{
            gridTemplateColumns: `repeat(${sports.length}, 1fr)`,
            display: 'none',
          }}
        >
          {sports?.map((sport, index) => (
            <h4
              style={{ gridArea: `1 / ${index + 1}` }}
              className="headerSports"
              data-findmatch="findMatch"
              data-sportid={sport.id}
              key={sport.id}
            >
              {sport.title}
            </h4>
          ))}
        </div>
        <div className="searchbar__wrapper" style={{ display: 'none' }}>
          <div className="inputbox">
            <input name="country" required="required" type="text" />
            <span>Country</span>
            <i />
          </div>
          <button className="inputbox__button" id="searchButton" type="button" data-sportid="1">
            Search
          </button>
        </div>
        <div
          id="table"
          className="tableGrid"
          style={{ gridTemplateColumns: 'repeat(5, 1fr)', display: 'none' }}
        />
        <div
          id="currentMatchTable"
          className="tableGrid"
          style={{ gridTemplateColumns: 'repeat(5, 1fr)', display: 'none' }}
        />
        <div className="cd-slider">
          <ul className="slider__list">
            <li>
              <div id="slider__image-1" className="image" />
              <div className=" content">
                <h2>Спорт</h2>
                <a
                  data-sportid="1"
                  className="slider__link"
                  data-findmatch="findMatch"
                  href="/"
                >
                  Найти игру
                </a>
              </div>
            </li>
            <li>
              <div id="slider__image-2" className="image" />
              <div className="content">
                <h2>Киберспорт</h2>
                <a
                  data-sportid="2"
                  className="slider__link"
                  data-findmatch="findMatch"
                  href="/"
                >
                  Найти игру
                </a>
              </div>
            </li>
            <li>
              <div id="slider__image-3" className="image" />
              <div className="content">
                <h2>Настольные игры</h2>
                <a
                  data-sportid="3"
                  className="slider__link"
                  data-findmatch="findMatch"
                  href="/"
                >
                  Найти игру
                </a>
              </div>
            </li>
            <li>
              <div id="slider__image-4" className="image" />
              <div className="content">
                <h2>Другое</h2>
                <a
                  data-sportid="4"
                  className="slider__link"
                  data-findmatch="findMatch"
                  href="/"
                >
                  Найти игру
                </a>
              </div>
            </li>
            {/* <li>
              <div id="slider__image-5" className="image" />
              <div className="content">
                <h2>Волейбол</h2>
                <a
                  data-sportid="4"
                  className="slider__link"
                  data-findmatch="findMatch"
                  href="/"
                >
                  Найти игру
                </a>
              </div>
            </li>
            <li>
              <div id="slider__image-6" className="image" />
              <div className="content">
                <h2>Монополия</h2>
                <a
                  data-sportid="6"
                  className="slider__link"
                  data-findmatch="findMatch"
                  href="/"
                >
                  Найти игру
                </a>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
      <div id="hiddenContainer">
        <CreateMatch user={user} sports={sports} />
        {user ? (
          ''
        ) : (
          <>
            <Registration />
            <Login />
          </>
        )}
        <Confirm />
      </div>
    </Layout>
  );
}

module.exports = Homepage;
