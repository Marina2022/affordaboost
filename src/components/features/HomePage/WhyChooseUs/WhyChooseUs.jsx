import s from './WhyChooseUs.module.scss'

import Community from "@/components/features/HomePage/Community/Community.jsx";
import WeBeleive from "@/components/features/HomePage/WeBelieve/WeBeleive.jsx";
import PercentList from "@/components/features/HomePage/PercentList/PercentList.jsx";
import Worldwide from "@/components/features/HomePage/Worldwide/Worldwide.jsx";

const WhyChooseUs = () => {
  return (
    <div className={s.whySection} id="whyChooseUs">
      <div className="container">
        <h2 className={s.title}>Why Choose Us</h2>
        <p className={s.subtitle}>Get your DESIRED RANK now!</p>
        <p className={s.reachText}>
          Reach your dream rank effortlessly with our safeLoL Boosting, Coaching & Accounts Services.
        </p>
        <WeBeleive />
        <PercentList />
        <Worldwide />
      </div>
      <Community/>
    </div>
  );
};

export default WhyChooseUs;
