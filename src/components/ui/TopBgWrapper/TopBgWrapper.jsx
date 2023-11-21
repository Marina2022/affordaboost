import s from './TopBgWrapper.module.scss'
import cn from "classnames";

const TopBgWrapper = ({children, classname}) => {
  return (
    <div className={cn(s.bgWrapper, classname)}>
      <div className={s.secondBg}></div>
      <div className={s.thirdBg}></div>
      <div className={s.logoBg}></div>
      {children}
    </div>
  );
};

export default TopBgWrapper;
