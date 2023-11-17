import s from './FaqItem.module.scss';
import chevronIcon from '@/assets/fi_chevron-up.svg'
import {useState} from "react";
import cn from "classnames";

// const faqItem = {
//   question: 'How does our rank boosting work?',
//   answer: 'Are you wondering how everything works? We\'ve made our process super straightforward. Once you purchase from us, one of our high-ranked players will play on your account to help you reach the rank you desire. It\'s that easy!'
// }

const FaqItem = ({faqItem}) => {

  const {question, answer} = faqItem

  const [open, setOpen] = useState(false)

  return (
    <li className={s.faqItem} onClick={() => setOpen(prev => !prev)}>
      <div className={cn(s.question, {[s.questionOpen]: open}) }>

        <button>
          <img className={open ? s.openBtn : ''}  src={chevronIcon} alt="toggle button"/></button>
        <span>
          {question}
        </span>
      </div>
      <div className={open ? s.answer : s.hidden}>{answer}</div>
    </li>
  );
};

export default FaqItem;
