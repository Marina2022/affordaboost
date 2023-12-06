import s from './Switch.module.scss';

const Switch = ({service, onCheck, disabled}) => {
  return (
    <div>
      <input className={s.check} type="checkbox" checked={disabled ? false : service.on } disabled={disabled} onChange={() => onCheck(service.title)}
             id={`id-${service.id}`}/>
      <label className={s.label} htmlFor={`id-${service.id}`}>
        <span className={s.track}></span>
        <span className={s.handle}></span>
      </label>
    </div>
  );
};

export default Switch;
