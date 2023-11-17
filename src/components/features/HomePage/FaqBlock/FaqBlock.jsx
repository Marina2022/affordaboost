import s from './FaqBlock.module.scss';
import {homePageFaq} from "@/data/data-faq.js";
import Faq from "@/components/ui/Faq/Faq.jsx";

const FaqBlock = () => {
  return (
    <div className='container'>
      <h1 className={s.title}>Frequency Asked Questions</h1>
      <p className={s.subtitle}>The knowledge is a power</p>
      <Faq data={homePageFaq} classname={s.faq} />
    </div>
  );
};

export default FaqBlock;
