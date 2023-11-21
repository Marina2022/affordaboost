import {Link} from "react-router-dom";
import s from './Header.module.scss'
import logo from "@/assets/header/logo3D.png"
import logoMobile from "@/assets/header/mobile/logo-mobile.png"
import menuBtn from "@/assets/header/mobile/menuBtn.svg"
import {useState} from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const mobileClickHandle = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.mainNav}>
          <ul className={s.navList}>
            <li><Link to='boosting'>Boosting</Link></li>
            <li className={s.secondItem}><Link to='coaching'>Coaching</Link></li>
            <li><Link to="/"><img className={s.headerLogo} src={logo} alt="logo"/></Link></li>
            <li><Link to='faq'>FAQ</Link></li>
            <li><Link to='contact'>Contact us</Link></li>
          </ul>
        </nav>
        <div className={s.mobileVisible}>
          <Link onClick={()=>setIsMenuOpen(false)} className={s.mobileLogoLink} to="/"><img src={logoMobile} alt="logo"/></Link>
          <button onClick={mobileClickHandle}>
            <img src={menuBtn} alt=""/>
          </button>
        </div>
        {
          isMenuOpen && <div className={s.mobileMenu}>
            <div className={s.mobileMenuOver}></div>
            <ul className={s.mobileNav}>
              <li className={s.mobileNavItem}>
                <Link onClick={()=>setIsMenuOpen(false)} to="/boosting">BOOSTING</Link>
              </li>
              <li className={s.mobileNavItem}>
                <Link onClick={()=>setIsMenuOpen(false)} to="/coaching">COACHING</Link>
              </li>
              <li className={s.mobileNavItem}>
                <Link onClick={()=>setIsMenuOpen(false)} to="/faq">FAQ</Link>
              </li>
              <li className={s.mobileNavItem}>
                <Link onClick={()=>setIsMenuOpen(false)} to="/contact">CONTACT US</Link>
              </li>
            </ul>
          </div>
        }
      </div>
    </header>
  );
};

export default Header;
