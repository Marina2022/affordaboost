import s from './CoachingCards.module.scss';
import CoachingCard from "@/components/features/CoachingPage/CoachingCard/CoachingCard.jsx";
import {coachingCards} from "@/data/data-coachingCards.js";

const CoachingCards = () => {
  return (
    <div className={s.coachingCards}>
      {
        coachingCards.map((card, index)=><CoachingCard card={card} key={index} />)
      }
    </div>
  );
};

export default CoachingCards;
