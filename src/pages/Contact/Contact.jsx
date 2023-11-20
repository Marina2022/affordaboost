import TopBgWrapper from "@/components/ui/TopBgWrapper/TopBgWrapper.jsx";

import s from'./Contact.module.scss'
import {useEffect} from "react";

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <TopBgWrapper classname={s.bgWrapperContact}>
        <div className='container'>
          <div className={s.main}>
            <h1 className={s.title}>Contact Us</h1>
            <p className={s.subtitle}>How and where to find us </p>
          </div>
        </div>
      </TopBgWrapper>
      <div className={s.middle} >

      </div>
    </>

  );
};

export default Contact;
