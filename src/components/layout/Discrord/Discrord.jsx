import discordImg from '@/assets/discord.svg'
import discordText from '@/assets/discord-text.svg'
import s from './Discrord.module.scss';
import {Link} from "react-router-dom";


const Discord = () => {
  return (
    <div className={s.discord}>
      <Link to="#">
        <span className={s.mobileHidden}>Visit our</span>
        <span className={s.iconWrapper}>
          <img className={s.icon} src={discordImg} alt="discord icon"/>
          <img className={s.mobileHidden} src={discordText} alt="discord text"/>
        </span>
      </Link>

    </div>
  );
};

export default Discord;
