import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import s from './Slider.module.scss'
import Slide from "@/components/features/HomePage/Slider/Slide/Slide.jsx";
import {Navigation} from "swiper/modules";
import {useRef} from "react";
import {slides} from "@/data/data-slides.js";

const Slider = () => {

  const swiperRef = useRef(null)

  return (
    <div className={s.wrapper}>
      <>
        <Swiper
          className={s.swiper}
          spaceBetween={0}
          slidesPerView={1}

          navigation={{ prevEl: '.prev', nextEl: '.next' }}
          onSwiper={(swiper) => swiperRef.current = swiper}
          modules={[Navigation]}
          breakpoints={{
            880: {
              slidesPerView: 'auto',
              spaceBetween: 24
            }
          }}
        >
          {
            slides.map((slide, index) => <SwiperSlide key={index} ><Slide info={slide} /></SwiperSlide>)
          }
          <SwiperSlide >
            <div className={s.emptySlide}></div>
          </SwiperSlide>
        </Swiper>
        <div className={s.btns}>
        <button className="prev"></button>
        <br/>
        <button className="next"></button>
        </div>
      </>
    </div>
  );
};

export default Slider
