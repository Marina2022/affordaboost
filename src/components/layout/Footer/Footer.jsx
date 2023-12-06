import s from './Footer.module.scss'

import icon1 from "@/assets/footer/icons/1-check-square.svg"
import icon2 from "@/assets/footer/icons/2-wallet.svg"
import icon3 from "@/assets/footer/icons/3-star.svg"
import logos from "@/assets/footer/all-logos.svg"
import footerLogo from "@/assets/footer/footer-logo.png"
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <h2 className={s.title}>Order Experience flow</h2>
        <ul className={s.stepList}>
          <li className={s.stepItem}>
            <img className={s.icon} src={icon1} alt="icon"/>
            <div>
              <h3 className={s.stepTitle}>1- Select Service</h3>
              <p  className={s.stepText}>Select and customize your desired service.</p>
            </div>
          </li>

          <li className={s.stepItem}>
            <img className={s.icon} src={icon2} alt="icon"/>
            <div>
              <h3 className={s.stepTitle}>2- Complete Payment</h3>
              <p  className={s.stepText}>Choose your preferred payment method.</p>
            </div>
          </li>

          <li className={s.stepItem}>
            <img className={s.icon} src={icon3} alt="icon"/>
            <div>
              <h3 className={s.stepTitle}>3- Rank-up</h3>
              <p  className={s.stepText}>Follow your order and live chat with your booster.</p>
            </div>
          </li>
        </ul>
        <div className={s.logos}>
          <img src={logos} alt="logos"/>
        </div>
        <Link className={s.footerLogo} to="/">
          <img src={footerLogo} alt="logo"/>
        </Link>
        <div className={s.links}>
          <Link to='legal'>Legal</Link>  &nbsp;&nbsp;   |&nbsp;&nbsp;   <Link to='terms'>Terms of use</Link>&nbsp;&nbsp;   |&nbsp;&nbsp;   <Link to='privacy'>Privacy policy</Link></div>
        <div className={s.copyright}>© 2014-2023 AffordeBoost - All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
