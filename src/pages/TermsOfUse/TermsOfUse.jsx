import s from './TermsOfUse.module.scss';
import TopBgWrapper from "@/components/ui/TopBgWrapper/TopBgWrapper.jsx";
import {useEffect} from "react";

const TermsOfUse = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <TopBgWrapper classname={s.bgWrapperContact}>
        <div className='container'>
          <div className={s.main}>
            <h1 className={s.title}>Terms of use</h1>
            <p className={s.subtitle}>Terms subheader </p>

            <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque explicabo illo vel. Ad aliquam illum iste laudantium magni nemo officia quam ratione similique sunt. Distinctio fuga quam quia quis sequi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque explicabo illo vel. Ad aliquam illum iste laudantium magni nemo officia quam ratione similique sunt. Distinctio fuga quam quia quis sequi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque explicabo illo vel. Ad aliquam illum iste laudantium magni nemo officia quam ratione similique sunt. Distinctio fuga quam quia quis sequi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque explicabo illo vel. Ad aliquam illum iste laudantium magni nemo officia quam ratione similique sunt. Distinctio fuga quam quia quis sequi?</p>
          </div>
        </div>
      </TopBgWrapper>
      <div className={s.middle} >
      </div>
    </>
  );
};

export default TermsOfUse;
