import s from './TopBgWrapper.module.scss'

const TopBgWrapper = ({children}) => {
  return (
    <div className={s.bgWrapper}>
      <div className={s.secondBg}></div>
      <div className={s.thirdBg}></div>
      {children}
    </div>
  );
};

export default TopBgWrapper;
