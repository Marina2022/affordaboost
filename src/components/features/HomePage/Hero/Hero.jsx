import TopBgWrapper from "@/components/ui/TopBgWrapper/TopBgWrapper.jsx";
import s from './Hero.module.scss'
import CallToActionButtons from "@/components/ui/CallToActionButtons/CallToActionButtons.jsx";

const onScrollBtnClick = () => {
  const whyBlock = document.getElementById('whyChooseUs')
  whyBlock.scrollIntoView({
    behavior: "smooth"
  })
}

const Hero = () => {
  return (
    <TopBgWrapper classname={s.bgWrapperHome}>
      <div className="container">
        <div className={s.main}>
          <h1 className={s.mainTitle}>
            <span className={s.headerSmall}>AffordaBoost </span>
            Boosting Services
          </h1>
          <h2 className={s.subtitle}>Get your DESIRED RANK now!</h2>
          <CallToActionButtons classname={s.callToAction}/>
          <div className={s.why}>
            <div>
              Why choose us
              Scroll
            </div>
            <button className={s.scrollBtn} onClick={onScrollBtnClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 10L24 38" stroke="#0EF3CA" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M38 24L24 38L10 24" stroke="#0EF3CA" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </TopBgWrapper>
  );
};

export default Hero;
