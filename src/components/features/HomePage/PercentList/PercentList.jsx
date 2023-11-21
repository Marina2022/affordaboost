import s from './PercentList.module.scss'

const PercentList = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Why is it worth choosing us?</h2>

      <ul className={s.percentList}>
        <li className={s.percentItem}>
          <p className={s.value}>3124</p>
          <p className={s.text}>Completed Orders</p>
        </li>
        <li className={s.percentItem}>
          <p className={s.value}>24/7</p>
          <p className={s.text}>Support and&nbsp;help</p>
        </li>
        <li className={s.percentItem}>
          <p className={s.value}>5 <span>years</span></p>
          <p className={s.text}>Experience</p>
        </li>
      </ul>
    </div>
  );
};

export default PercentList;
