import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import s from './Slider.module.scss'
import Slide from "@/components/features/HomePage/Slider/Slide/Slide.jsx";
import {Navigation} from "swiper/modules";
import {useEffect, useRef, useState} from "react";

const Slider = () => {

  const swiperRef = useRef(null)
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    {
      rating: 5,
      title: 'ddd',
      desc: 'sdfsdfasdf'
    },
    {
      rating: 5,
      title: 'ddd',
      desc: 'sdfsdfasdf'
    },
    {
      rating: 5,
      title: 'ddd',
      desc: 'sdfsdfasdf'
    },
    {
      rating: 5,
      title: 'ddd',
      desc: 'sdfsdfasdf'
    },
    {
      rating: 5,
      title: 'ddd',
      desc: 'sdfsdfasdf'
    },
    {
      rating: 5,
      title: 'ddd',
      desc: 'sdfsdfasdf'
    },
  ]

  return (
    <div className={s.wrapper}>
      <>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}

          onSlideChange={(value) => console.log('slide change', value.activeIndex)}
          onSwiper={(swiper) => swiperRef.current = swiper}
          modules={[Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}

          breakpoints={{
            880: {
              slidesPerView: 'auto',
              spaceBetween: 24
            }
          }}

        >

          {
            slides.map((slide, index)=><SwiperSlide key={index}><Slide/></SwiperSlide>)
          }

        </Swiper>
        <button className={s.prevBtn}

                 disabled={currentIndex === 0}

                onClick={() => {
                  swiperRef.current.slidePrev()
                  setCurrentIndex(swiperRef.current.activeIndex)
                }}
                ref={navigationPrevRef}>
          prev
        </button>
        <button
          className={s.nextBtn}
            disabled={innerWidth  < 1801 ? currentIndex === (slides.length -  3) : currentIndex === (slides.length -  4) }
          onClick={() => {
            swiperRef.current.slideNext()
            setCurrentIndex(swiperRef.current.activeIndex)
          }}>
          next

        </button>
      </>
    </div>
  );
};

export default Slider
