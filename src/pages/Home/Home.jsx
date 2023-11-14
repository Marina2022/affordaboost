import s from './Home.module.scss'
import TopBgWrapper from "@/components/ui/TopBgWrapper/TopBgWrapper.jsx";
import CallToActionButtons from "@/components/ui/CallToActionButtons/CallToActionButtons.jsx";

const Home = () => {
  return (

    <TopBgWrapper>
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

            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 10L24 38" stroke="#0EF3CA" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M38 24L24 38L10 24" stroke="#0EF3CA" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
            </button>
          </div>


        </div>
      </div>
    </TopBgWrapper>


  );
};

export default Home;
