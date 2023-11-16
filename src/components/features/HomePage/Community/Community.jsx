import s from './Community.module.scss'
import Slider from "@/components/features/HomePage/Slider/Slider.jsx";

const Community = () => {
  return (

    <div className={s.communityBlock}>

      <div className={s.communityWrapper}>
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

        <div className={s.sliderWrapper}>
          <Slider />
        </div>


        <div className='container'>
          <h2 className={s.title}>
            Our Community
          </h2>
          <p className={s.subtitle}>
            What our clients say about us
          </p>
        </div>
      </div>
    </div>
  )
};

export default Community;
