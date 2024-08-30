/* eslint-disable react/prop-types */
import './index.css'
import Logo from '../../assets/img/logo.webp'


export const Header = ({ scrollToSection }) => {
  return (
    <header className="header">
      <div className='header-wrapper'>
        <img src={Logo} alt="softtek logo" />
        <nav>
          <ul>
            <li onClick={() => scrollToSection('section1')}>
              <a>solução de problemas</a>
            </li>
            <li onClick={() => scrollToSection('section2')}>
              <a>sobre o produto</a>
            </li>
            <li onClick={() => scrollToSection('section3')}>
              <a>suporte</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}