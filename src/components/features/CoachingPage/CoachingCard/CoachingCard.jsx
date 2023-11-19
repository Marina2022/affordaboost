import Select from 'react-select'

import s from './CoachingCard.module.scss';
import {useState} from "react";


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
          <Select
            options={card.options}
            onChange={selectChangeHandler}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: '#ddd',
                primary: '#777',
              },
            })}
            defaultValue={card.options[0]}
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                height: 48,
                paddingLeft: '4px',
                fontSize: 16,
                borderColor: '#0ECFAC',
                cursor: 'pointer',
                background: '#B8EADC',
                width: '100%',
              }),

              indicatorSeparator: (baseStyles) => ({
                ...baseStyles,
                display: 'none',
              }),

              dropdownIndicator: (baseStyles) => ({
                ...baseStyles,
                color: '#6c757d',
              }),

              menu: (baseStyles) => ({
                ...baseStyles,
                background: '#B8EADC',
              }),

              option: (baseStyles) => ({
                ...baseStyles,
                fontSize: 16,
                lineHeight: 1.4,
                color: '#08291E',
                background: '#B8EADC',
                width: 300,
              }),
            }}
          />
          <button onClick={() => console.log('price to pay =', resultPrice)}
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
