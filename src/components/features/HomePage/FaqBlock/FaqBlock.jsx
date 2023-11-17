import s from './FaqBlock.module.scss';
import {homePageFaq} from "@/data/data-faq.js";
import Faq from "@/components/ui/Faq/Faq.jsx";

const FaqBlock = () => {
  return (
    <div className='container'>
      <h2 className={s.title}>Frequency Asked Questions</h2>
      <p className={s.subtitle}>The knowledge is a power</p>
      <Faq data={homePageFaq} classname={s.faq} />
    </div>
  );
};

export default FaqBlock;
