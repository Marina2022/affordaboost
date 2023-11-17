import {Link} from "react-router-dom";
import s from './Header.module.scss'
import logo from "@/assets/header/logo3D.png"


const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.mainNav}>
          <ul className={s.navList}>
            <span className={s.logoBg}></span>
            <li><Link to='boosting'>Boosting</Link></li>
            <li className={s.secondItem}><Link to='coaching'>Coaching</Link></li>
            <li><Link to="/"><img className={s.headerLogo} src={logo} alt="logo"/></Link></li>
            <li><Link to='faq'>FAQ</Link></li>
            <li><Link to='contact'>Contact us</Link></li>
          </ul>

          <div className={s.mobileVisible}>
            <div className={s.overlay}>hahaha</div>
          </div>

        </nav>
      </div>
    </header>
  );
};

export default Header;
