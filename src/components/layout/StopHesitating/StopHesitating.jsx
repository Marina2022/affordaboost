import s from './StopHesitating.module.scss';
import CallToActionButtons from "@/components/ui/CallToActionButtons/CallToActionButtons.jsx";
import cn from "classnames";

const StopHesitating = ({classname}) => {
  return (
    <div className={cn(classname, s.background)}>
      <div className={s.gradient}>
        <div className='container'>
          <h2 className={s.title}>Stop hesitating!</h2>
          <p className={s.subtitle}>Start <span className={s.highlight}>playing
          <br className={s.br}/>
          on your deserved
          <br className={s.brSecond}/>
          </span> rank <span
            className={s.highlight}>today.</span>
          </p>
          <CallToActionButtons classname={s.center}/>
        </div>
      </div>
    </div>
  );
};

export default StopHesitating;
