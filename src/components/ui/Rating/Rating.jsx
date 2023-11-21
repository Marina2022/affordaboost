import s from './Rating.module.scss';
import starImg from '@/assets/ranking-star.svg'

const Rating = ({rating = 0}) => {
  const newArray = Array.from({length: rating}, (item, index)=> <img key={index} src={starImg} alt="star" /> )
  return (
    <div className={s.rating}>
      {
        newArray
      }
    </div>
  );
};

export default Rating;
