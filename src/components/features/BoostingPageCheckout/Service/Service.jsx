import s from './Service.module.scss';
import Switch from "@/components/ui/Switch/Switch.jsx";

const Service = ({service, onCheck, playWithBoosterDisabled}) => {
  return (
    <li className={s.item}>
      <div className={s.title}>
        {service.title}
      </div>
        {
        service.price ?  <div className={s.price}>+ {service.price*100}% </div> : null
        }

      <div className={s.check}><Switch service={service} onCheck={onCheck } disabled={playWithBoosterDisabled && service.id === 1 } /></div>
    </li>
  );
};

export default Service;
