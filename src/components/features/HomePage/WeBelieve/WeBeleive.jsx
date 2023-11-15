import s from "./WeBeleive.module.scss";

import img1 from '@/assets/whyChooseUs/icons/u_shield-check+.svg'
import img2 from '@/assets/whyChooseUs/icons/lock-access.svg'
import img3 from '@/assets/whyChooseUs/icons/trophy.svg'

const WeBeleive = () => {
  return (
    <div className={s.desc}>
      <div className={s.leftDesc}>
        <p className={s.descTitle}>
          We believe that every customer deserves a special, tailored experience.
        </p>
        <p className={s.text}>
          Forget about frustrating games; reach your deserved rank effortlessly.
        </p>
        <p className={s.text}>
          Whether you're purchasing League, Valorant,
          or Wild Rift Boosting, you are privileged to all premium features.
        </p>
      </div>

      <ul className={s.rightDesc}>
        <li className={s.whyItem}>
          <img className={s.icon} src={img1} alt="icon"/>
          <div>
            <h3 className={s.itemTitle}>Trustworthy</h3>
            <p className={s.itemText}>With an astounding 5 star rating on Trustpilot, we are pleased to be the top-rated boosting website in the industry.</p>
          </div>
        </li>

        <li className={s.whyItem}>
          <img className={s.icon} src={img2} alt="icon"/>
          <div>
            <h3 className={s.itemTitle}>The Safest</h3>
            <p className={s.itemText}>Our commitment to our customers is to always maintain a high level of service and safety.</p>
          </div>
        </li>

        <li className={s.whyItem}>
          <img className={s.icon} src={img3} alt="icon"/>
          <div>
            <h3 className={s.itemTitle}>Top Results</h3>
            <p className={s.itemText}>We top the boosting industry with an overall 87% win ratio across all services.</p>
          </div>
        </li>

      </ul>
    </div>
  );
};

export default WeBeleive;
