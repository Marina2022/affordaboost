import s from './Slide.module.scss'
import Rating from "@/components/ui/Rating/Rating.jsx";

const Slide = ({info}) => {
  const {rating, author, title, text, date} = info
  return (
    <div className={s.slide}>
      <Rating rating={rating}/>
      <p className={s.author}>{author}</p>
      <h4 className={s.title}>{title}</h4>
      <p className={s.text}>{text}</p>
      <p className={s.date}>{date}</p>
    </div>
  );
};

export default Slide;
