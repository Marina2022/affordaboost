import {useEffect} from 'react';
import TopBgWrapper from "@/components/ui/TopBgWrapper/TopBgWrapper.jsx";
import s from "@/pages/TermsOfUse/TermsOfUse.module.scss";

const Privacy = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <TopBgWrapper classname={s.bgWrapperContact}>
        <div className='container'>
          <div className={s.main}>
            <h1 className={s.title}>Privacy policy</h1>
            <p className={s.subtitle}>Privacy policy subheader </p>

            <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque explicabo illo vel. Ad aliquam illum iste laudantium magni nemo officia quam ratione similique sunt. Distinctio fuga quam quia quis sequi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque explicabo illo vel. Ad aliquam illum iste laudantium magni nemo officia quam ratione similique sunt. Distinctio fuga quam quia quis sequi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque explicabo illo vel. Ad aliquam illum iste laudantium magni nemo officia quam ratione similique sunt. Distinctio fuga quam quia quis sequi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque explicabo illo vel. Ad aliquam illum iste laudantium magni nemo officia quam ratione similique sunt. Distinctio fuga quam quia quis sequi?</p>

          </div>
        </div>
      </TopBgWrapper>
      <div className={s.middle} >
      </div>
    </>
  );
};

export default Privacy;
