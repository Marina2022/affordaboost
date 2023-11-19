import s from './Boosting.module.scss'
import TopBgWrapper from "@/components/ui/TopBgWrapper/TopBgWrapper.jsx";
import Checkout from "@/components/features/BoostingPageCheckout/Checkout.jsx";

const Boosting = () => {
  return (
    <TopBgWrapper classname={s.boostingBg}>
      <div className={s.middleBg}></div>
      <div className='container'>s
        <div className={s.main}>
          <h1 className={s.title}>Coaching</h1>
          <p className={s.subtitle}>Improve your skills under the guidance of the best players </p>
          <div className={s.cardsContainer}>
            <Checkout/>
          </div>
        </div>
      </div>
    </TopBgWrapper>
  );
};

export default Boosting;
