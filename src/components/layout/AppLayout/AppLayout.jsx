import {Outlet} from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import s from './AppLayout.module.scss'
import StopHesitating from "@/components/layout/StopHesitating/StopHesitating.jsx";

const AppLayout = () => {
  return (
    <div>
      <Header/>
      <main className={s.main}>

        <Outlet/>
        <StopHesitating classname={s.stopHesitating} />

      </main>
      <Footer/>
    </div>
  );
};

export default AppLayout;
