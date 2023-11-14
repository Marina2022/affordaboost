import {Outlet} from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import s from './AppLayout.module.scss'

const AppLayout = () => {
  return (
    <div>
      <Header/>
      <main className={s.main}>

        <Outlet/>

      </main>
      <Footer/>
    </div>
  );
};

export default AppLayout;
