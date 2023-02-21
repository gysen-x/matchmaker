const React = require('react');
const CreateMatch = require('../components/CreateMatch');
const Layout = require('../components/Layout');
const Login = require('../components/Login');
const Registration = require('../components/Registration');

function Homepage({ user, sports }) {
  return (
    <Layout user={user}>
      <>
        <div className="table-row header" id="table_header" style={{ display: "none" }}>
          {sports.map((sport) => (
            <div className="table-row__title">
              <h4 id={sport.id} key={sport.id}>{sport.title}</h4>
            </div>
          ))}
        </div>
        <div id="table" style={{ display: 'none' }} />
        <div className="cd-slider">
          <ul className="slider__list">
            <li>
              <div id="slider__image-1" className="image" />
              <div className=" content">
                <h2>Футбол</h2>
                <a className="slider__link" href="#">
                  Найти игру
                </a>
              </div>
            </li>
            <li>
              <div id="slider__image-2" className="image" />
              <div className="content">
                <h2>Баскетбол</h2>
                <a className="slider__link" href="#">
                  Найти игру
                </a>
              </div>
            </li>
            <li>
              <div id="slider__image-3" className="image" />
              <div className="content">
                <h2>Dota 2</h2>
                <a className="slider__link" href="#">
                  Найти игру
                </a>
              </div>
            </li>
            <li>
              <div id="slider__image-4" className="image" />
              <div className="content">
                <h2>Теннис</h2>
                <a className="slider__link" href="#">
                  Найти игру
                </a>
              </div>
            </li>
            <li>
              <div id="slider__image-5" className="image" />
              <div className="content">
                <h2>Волейбол</h2>
                <a className="slider__link" href="#">
                  Найти игру
                </a>
              </div>
            </li>
            <li>
              <div id="slider__image-6" className="image" />
              <div className="content">
                <h2>Монополия</h2>
                <a className="slider__link" href="#">
                  Найти игру
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="bottom__text">
            <h1 className="bottom__title">😱 О, нет!</h1>
            <p className="bottom__paragraph">
              Как часто вы оказывались в ситуации когда в последний момент один
              из игроков заболел и не может участвовать в игре? Бывало ли такое
              что из-за нехватки игроков приходилось отменять игру или турнир?
            </p>
          </div>

          <div className="bottom__text">
            <h1 className="bottom__title">🐬 Спорт</h1>
            <p className="bottom__paragraph">
              Какое же влияние оказывает спорт на человека?
            </p>
            <p className="bottom__paragraph">
              Мышцы человека укрепляются, организм человека приобретает
              выносливость. Ткани и клетки всего организма снабжаются кислородом
              и укрепляется сердце с сосудистой системой.
            </p>
          </div>
          <div className="bottom__text">
            <h1 className="bottom__title">🎯 Наше решение</h1>
            <p className="bottom__paragraph">
              Наш сайт решает эти проблемы. Вы можете как найти уже существующую
              игру и принять в ней участие, либо создать свою и пригласить на
              неё единомышленников.
            </p>
          </div>
        </div>
        <div id="hiddenContainer">
          <CreateMatch user={user} sports={sports} />
          <Registration />
          <Login />
        </div>
      </>
    </Layout>
  );
}

module.exports = Homepage;
