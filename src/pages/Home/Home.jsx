import Hero from "@/components/features/HomePage/Hero/Hero.jsx";
import WhyChooseUs from "@/components/features/HomePage/WhyChooseUs/WhyChooseUs.jsx";
import FaqBlock from "@/components/features/HomePage/FaqBlock/FaqBlock.jsx";
import {useEffect} from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Hero/>
      <WhyChooseUs/>
      <FaqBlock/>
    </>
  );
};

export default Home;
