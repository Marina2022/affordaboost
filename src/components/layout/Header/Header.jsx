import {Link} from "react-router-dom";
import s from './Header.module.scss'
import logo from "@/assets/header/logo3D.png"


const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.mainNav}>
          <ul className={s.navList}>
            <li><Link to='boosting'>Boosting</Link></li>
            <li className={s.secondItem}><Link to='coaching'>Coaching</Link></li>
            <li><Link to='faq'>FAQ</Link></li>
            <li><Link to='contact'>Contact us</Link></li>
            <span className={s.logoBg}></span>
            <li><Link to="/"><img className={s.headerLogo} src={logo} alt="logo"/></Link> </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
