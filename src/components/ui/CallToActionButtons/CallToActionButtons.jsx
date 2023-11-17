import s from './CallToActionButtons.module.scss'
import {Link} from "react-router-dom";

const CallToActionButtons = ({classname}) => {
  return (
    <div className={s.buttons + " " + classname}>
      <Link to='/boosting' className={s.boostingBtn}>
        <div className={s.getYourWrap}>
          <span className={s.getYourText}>GET your</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <g clipPath="url(#clip0_96_880)">
              <path d="M23.5 6L14 15.5L9 10.5L1.5 18" stroke="#00483B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5 6H23.5V12" stroke="#00483B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_96_880">
                <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={s.btnBottomText}>
          boosting
        </div>
      </Link>

      <Link to='/coaching' className={s.coachingBtn}>
        <div className={s.getYourWrap}>
          <span className={s.getYourText}>GET your</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <g clipPath="url(#clip0_96_886)">
              <path
                d="M23.5 21.0009V19.0009C23.4993 18.1146 23.2044 17.2536 22.6614 16.5532C22.1184 15.8527 21.3581 15.3524 20.5 15.1309"
                stroke="#41330B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path
                d="M17.5 21V19C17.5 17.9391 17.0786 16.9217 16.3284 16.1716C15.5783 15.4214 14.5609 15 13.5 15H5.5C4.43913 15 3.42172 15.4214 2.67157 16.1716C1.92143 16.9217 1.5 17.9391 1.5 19V21"
                stroke="#41330B" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
              <path
                d="M16.5 3.13086C17.3604 3.35116 18.123 3.85156 18.6676 4.55317C19.2122 5.25478 19.5078 6.11769 19.5078 7.00586C19.5078 7.89403 19.2122 8.75694 18.6676 9.45855C18.123 10.1602 17.3604 10.6606 16.5 10.8809"
                stroke="#41330B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path
                d="M9.5 11C11.7091 11 13.5 9.20914 13.5 7C13.5 4.79086 11.7091 3 9.5 3C7.29086 3 5.5 4.79086 5.5 7C5.5 9.20914 7.29086 11 9.5 11Z"
                stroke="#41330B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_96_886">
                <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={s.btnBottomText}>
          coaching
        </div>
      </Link>
    </div>
  );
};

export default CallToActionButtons;
