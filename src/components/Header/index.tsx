import { HeaderContainer } from './styled';
import { FaInstagram } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';

export default function Header() {
  return (
    <HeaderContainer>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <a className="menu__item" href="#">
              Projetos
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              Meu Currículo
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              francioxaviersilva@gmail.com
            </a>
          </li>
          <li>
            <div
              style={{ display: 'flex', marginTop: '2rem', padding: '0 12px' }}
            >
              <a className="menu__item" href="#">
                <FaInstagram size={35} />
              </a>
              <a className="menu__item" href="#">
                <FiGithub size={35} />
              </a>
              <a className="menu__item" href="#">
                <FiLinkedin size={35} />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </HeaderContainer>
  );
}
