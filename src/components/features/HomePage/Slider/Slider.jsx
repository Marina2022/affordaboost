import s from './Slider.module.scss'

const Slider = () => {
  return (

    <div className={s.sliderBlock}>

      <div className={s.sliderWrapper}>
        <div className={s.bgRightBottom}></div>
        <div className={s.bgLeftBottom}></div>

        <div className={s.svgWrapper}>
          <svg className={s.bgBottomSVG} xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 1920 950" fill="none">
            <g>
              <path d="M0 117.5L1920 0V950L384.5 762.5L0 950V117.5Z"/>
            </g>
          </svg>
        </div>

        <div className={s.swiper}>
          swiper
        </div>


        <div className='container'>
          <h2 className={s.title}>
            Our Community
          </h2>
          <p className={s.subtitle}>
            What our clients say about us
          </p>
          <div className={s.sliderContainer}>Slider</div>
        </div>
      </div>
    </div>
  )
};

export default Slider;
