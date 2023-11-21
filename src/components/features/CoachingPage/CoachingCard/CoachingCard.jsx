import s from './CoachingCard.module.scss';
import {useState} from "react";
import Select from "@/components/ui/Select/Select.jsx";

const CoachingCard = ({card}) => {
  const [selectValue, setSelectValue] = useState(2)
  const selectChangeHandler = ({value}) => {
    setSelectValue(value)
  }
  const resultPrice = selectValue * card.priceFrom

  return (
    <div className={s.wrapper}>
      <div className={s.bgGreenDesktop}></div>
      <div className={s.bgYellowDesktop}></div>

      <div className={s.bgGreenTablet}></div>
      <div className={s.bgYellowTablet}></div>

      <div className={s.bgGreenMobile}></div>
      <div className={s.bgYellowMobile}></div>

      <div className={s.card}>
        <div className={s.picture}>
          <img src={card.img} alt=""/>
        </div>
        <div className={s.title}><strong>  {card.titleStart}</strong> {card.titleEnd}</div>
        <div className={s.text}>{card.text}</div>

        <div className={s.price}>
          <p className={s.priceText}>Price from</p>
          <p className={s.priceValue}>${card.priceFrom}</p>
          <p className={s.priceText}>per 1 hour</p>
        </div>

        <div className={s.order}>
          <p className={s.orderLabel}>Order:</p>

          <Select options={card.options} selectChangeHandler={selectChangeHandler} defaultValue={card.options[0]}/>

          <button onClick={() => console.log({
            priceFrom: card.priceFrom,
            selectedHours: selectValue,
            totalAmount: resultPrice,
          })
          }
                  className={s.orderBtn}>
            <div className={s.btnTextWrapper}>
              <div className={s.summary}>
                <span className={s.getYourText}>Summary ${resultPrice}</span>
              </div>
              <div className={s.btnBottomText}>
                Order Now
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoachingCard;
