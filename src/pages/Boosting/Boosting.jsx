import s from './Boosting.module.scss'
import TopBgWrapper from "@/components/ui/TopBgWrapper/TopBgWrapper.jsx";
import Checkout from "@/components/features/BoostingPageCheckout/Checkout.jsx";
import {useEffect} from "react";

const Boosting = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <TopBgWrapper classname={s.boostingBg}>
      <div className={s.middleBg}></div>
      <div className='container'>
        <div className={s.main}>
          <div className={s.checkoutHeaderContainer}>
            <h1 className={s.title}>Boosting</h1>
            <p className={s.subtitle}>Leading League & Division Rank Up Service</p>
          </div>
          <div className={s.cardsContainer}>
            <Checkout/>
          </div>
        </div>
      </div>
    </TopBgWrapper>
  );
};

export default Boosting;
