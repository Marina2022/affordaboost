import s from './Service.module.scss';
import Switch from "@/components/ui/Switch/Switch.jsx";

const Service = ({service, onCheck}) => {
  return (
    <li className={s.item}>
      <div className={s.title}>
        {service.title}
      </div>

      <div className={s.price}>
        + ${service.price}
      </div>

      <div className={s.check}><Switch service={service} onCheck={onCheck} /></div>

    </li>
  );
};

export default Service;
