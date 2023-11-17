import Hero from "@/components/features/HomePage/Hero/Hero.jsx";
import WhyChooseUs from "@/components/features/HomePage/WhyChooseUs/WhyChooseUs.jsx";
import s from './Home.module.scss'
import FaqBlock from "@/components/features/HomePage/FaqBlock/FaqBlock.jsx";
import StopHesitating from "@/components/layout/StopHesitating/StopHesitating.jsx";

const Home = () => {
  return (

    <>
      <Hero/>
      <WhyChooseUs/>
      <FaqBlock />
    </>


  );
};

export default Home;
