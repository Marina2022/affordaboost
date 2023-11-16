import s from './Worldwide.module.scss';

const Worldwide = () => {
  return (
    <div className={s.worldwideBlock}>
      <h1 className={s.title}>Operated Worldwide</h1>
      <p className={s.subtitle}>Adapt to your needs</p>
      <p className={s.text}>We operate all over the world, but we adapt to your current location using a secure VPN connection.</p>
    </div>
  );
};

export default Worldwide;
