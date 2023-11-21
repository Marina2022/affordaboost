import discordImg from '@/assets/discord.svg'
import discordTextIcon from '@/assets/discord-text.svg'

import s from './DiscordBtn.module.scss';
import {Link} from "react-router-dom";

const DiscordBtn = () => {
  return (
    <div className={s.discord}>
      <Link to="#">
        <span className={s.discordText}>Visit our</span>
        <span className={s.iconWrapper}>
          <img className={s.icon} src={discordImg} alt="discord icon"/>
          <img className={s.textIcon} src={discordTextIcon} alt="discord text"/>
        </span>
      </Link>
    </div>
  )
}

export default DiscordBtn;


