import s from './FaqPage.module.scss'
import TopBgWrapper from "@/components/ui/TopBgWrapper/TopBgWrapper.jsx";
import {faqPageFaq} from "@/data/data-faq.js";
import Faq from "@/components/ui/Faq/Faq.jsx";
import {useEffect} from "react";

const FaqPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
      <TopBgWrapper>
        <div className={s.middleBg}></div>
        <div className='container'>
          <div className={s.main}>
            <h1 className={s.title}>Frequently Asked Questions</h1>
            <p className={s.subtitle}>The knowledge is a power</p>
            <div className={s.cardsContainer}>
              <Faq data={faqPageFaq} classname={s.faq}/>
            </div>
          </div>
        </div>
      </TopBgWrapper>
  );
};

export default FaqPage;
