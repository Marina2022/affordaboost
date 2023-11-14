import s from './WhyChooseUs.module.scss'

const WhyChooseUs = () => {
  return (
    <div className={s.whySection} id="whyChooseUs">
      <div className="container">
        <h2 className={s.title}>Why Choose Us</h2>
        <p className={s.getYourRankText}>Get your DESIRED RANK now!</p>
      </div>

      <div className={s.sliderWrapper}></div>

    </div>
  );
};

export default WhyChooseUs;
