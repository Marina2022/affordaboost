import s from './FaqPage.module.scss'
import TopBgWrapper from "@/components/ui/TopBgWrapper/TopBgWrapper.jsx";
import {faqPageFaq} from "@/data/data-faq.js";
import Faq from "@/components/ui/Faq/Faq.jsx";

const FaqPage = () => {
  return (
    <>
      <TopBgWrapper>
        <div className='container'>
          <div className={s.main}>
            <h1 className={s.title}>Frequency Asked Questions</h1>
            <p className={s.subtitle}>The knowledge is a power</p>
            <div className={s.faqContainer}>
              <Faq data={faqPageFaq}/>
            </div>
          </div>
        </div>
      </TopBgWrapper>
      <div className={s.middle}>


      </div>
    </>
  );
};

export default FaqPage;
