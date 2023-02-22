const React = require('react');

module.exports = function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__element footer__socials">
          <a href="/" className="footer__link">
            <svg className="footer__icon" fill="#fff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z" />
            </svg>
          </a>
          <a href="/" className="footer__link">
            <svg
              className="footer__icon"
              fill="#fff"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-143 145 512 512"
              xmlSpace="preserve"
            >
              <g>
                <path d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z" />
                <polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346 " />
                <path d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z" />
                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,374.7v104.8c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3c0-27.3,22.2-49.5,49.5-49.5h157c27.3,0,49.5,22.2,49.5,49.5V374.7z" />
              </g>
            </svg>

          </a>
          <a href="/" className="footer__link">
            <svg
              className="footer__icon"
              fill="#fff"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-143 145 512 512"
              xmlSpace="preserve"
            >
              <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M169.5,357.6l-2.9,38.3h-39.3v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z" />
            </svg>
          </a>
        </div>
        <div className="footer__element footer__text">
          <p className="footer__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam quod nulla unde excepturi voluptatum nam, libero nesciunt, tempore explicabo at sint quisquam saepe fugiat, ipsam ducimus incidunt. Odit, aliquid.</p>
        </div>
        <div className="footer__element footer__contacts">
          <ul className="footer__nav list-reset">
            <li className="footer__nav-item">
              <a href="/" className="footer__nav-link">Контакты</a>
            </li>
            <li className="footer__nav-item">
              <a href="/" className="footer__nav-link">Список матчей</a>
            </li>
            <li className="footer__nav-item">
              <a href="/" className="footer__nav-link">Личный кабинет</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
