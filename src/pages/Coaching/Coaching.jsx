import TopBgWrapper from "@/components/ui/TopBgWrapper/TopBgWrapper.jsx";
import s from "@/pages/Coaching/Coaching.module.scss";
import CoachingCards from "@/components/features/CoachingPage/CoachingCards.jsx";
import {useEffect} from "react";

const Coaching = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <TopBgWrapper classname={s.coachingBg}>
      <div className={s.middleBg}></div>
      <div className='container'>
        <div className={s.main}>
          <h1 className={s.title}>Coaching</h1>
          <p className={s.subtitle}>Improve your skills under the guidance of the best players </p>
          <div className={s.coachText}>
            <div className={s.textLeft}>Take advantage of the individual coaching session we offer, check and improve
              your skills!
            </div>
            <div className={s.textRight}>Specify how many hours of coaching you need, pay for the order, and then we
              will adjust the date you choose and match the perfect Coach/Trainer.
            </div>
          </div>
          <div className={s.cardsContainer}>
            <CoachingCards/>
          </div>
        </div>
      </div>
    </TopBgWrapper>
  );
};

export default Coaching;
