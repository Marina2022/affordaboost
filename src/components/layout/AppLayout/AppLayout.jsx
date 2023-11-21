import {Outlet} from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import s from './AppLayout.module.scss'
import StopHesitating from "@/components/layout/StopHesitating/StopHesitating.jsx";
import Discord from "@/components/layout/Discrord/Discord.jsx";

const AppLayout = () => {
  return (
    <div>
      <div className={s.mobileHeaderOverlay}></div>
      <Header/>
      <main>
        <Outlet/>
        <StopHesitating classname={s.stopHesitating} />
      </main>
      <Footer/>
      <Discord />
    </div>
  );
};

export default AppLayout;
