import s from './Switch.module.scss';

const Switch = ({service, onCheck}) => {
  return (
    <div>
      <input className={s.check} type="checkbox" checked={service.on} onChange={() => onCheck(service.title)}
             id={`id-${service.id}`}/>
      <label className={s.label} htmlFor={`id-${service.id}`}>
        <span className={s.track}></span>
        <span className={s.handle}></span>
      </label>
    </div>
  );
};

export default Switch;
