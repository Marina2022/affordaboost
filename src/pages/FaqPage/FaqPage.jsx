import s from './FaqPage.module.scss'
import TopBgWrapper from "@/components/ui/TopBgWrapper/TopBgWrapper.jsx";
import {faqPageFaq} from "@/data/data-faq.js";
import Faq from "@/components/ui/Faq/Faq.jsx";

const FaqPage = () => {
  return (
    <>
      <TopBgWrapper>
        <div className={s.middleBg}></div>
        <div className='container'>s
          <div className={s.main}>
            <h1 className={s.title}>Frequency Asked Questions</h1>
            <p className={s.subtitle}>The knowledge is a power</p>
            <div className={s.faqContainer}>
              <Faq data={faqPageFaq} classname={s.faq}/>
            </div>
          </div>
        </div>
      </TopBgWrapper>



    </>
  );
};

export default FaqPage;
