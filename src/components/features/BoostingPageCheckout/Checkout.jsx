import s from './Checkout.module.scss';
import {additionalServices, rankNumbers, rankPictures, testOptions} from "@/data/data-chechout.js";
import {useState} from "react";
import cn from "classnames";
import Select from "@/components/ui/Select/Select.jsx";
import Service from "@/components/features/BoostingPageCheckout/Service/Service.jsx";

const Checkout = () => {

  //current rank
  const [selectedImg, setSelectedImg] = useState(1)
  const [selectedNumber, setSelectedNumber] = useState(1)

  //desired rank
  const [selectedDesiredImg, setSelectedDesiredImg] = useState(1)
  const [selectedDesiredNumber, setSelectedDesiredNumber] = useState(1)

  // dropdowns values (can be used in total amount formula)
  const [currentLPH, setCurrentLPH] = useState(null)
  const [LPGain, setLPGain] = useState(null)
  const [server, setServer] = useState(null)
  const [type, setType] = useState(null)

  // additional services object
  const [services, setServices] = useState(additionalServices)

  //onChange handlers
  const selectCurrentLPHandler = ({value}) => setCurrentLPH(value)
  const selectLPGain = ({value}) => setLPGain(value)
  const selectServer = ({value}) => setServer(value)
  const selectType = ({value}) => setType(value)

  const checkHandler = (title) => {
    const newServices = services.map((service) => {
        if (service.title === title) return {...service, on: !service.on}
        return service
      }
    )
    setServices(newServices)
  }

  // assume every rank img adds $150 and every rank number adds $100 to total amount
  const RANK_IMG_ADDING = 150
  const RANK_NUMBER_ADDING = 100

  // counting additional services sum:
  const additionalServicesSum = services.reduce((acc, item) => acc + (item.on ? item.price : 0), 0)

  //total amount formula  (values of dropdowns can be easily added to the formula if needed)
  const totalAmount = (selectedDesiredImg - selectedImg) * RANK_IMG_ADDING + (selectedDesiredNumber - selectedNumber) * RANK_NUMBER_ADDING + additionalServicesSum

  const formatter = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  });

  return (
    <div className={s.checkoutBlock}>
      <div className={s.wrapper}>
        <div className={s.ranksPart}>
          <div className={s.generalRankBlock}>
            <div className={s.headerWrapper}>
              <div>
                <img className={s.headerImg} src={rankPictures[selectedImg].img} alt="rank image" width="50"
                     height="50"/>
              </div>
              <h3 className={s.rankHeader}>Current Rank</h3>
            </div>
            <ul className={s.rankImgs}>
              {
                rankPictures.map((img, ind) => {
                  return (
                    <li className={cn(s.rankImgItem, {
                      [s.rankImgItemActive]: selectedImg === img.value
                    })}

                        key={ind}
                        onClick={() => setSelectedImg(img.value)}

                    >
                      <img src={img.img} alt="img"/>
                    </li>
                  )
                })
              }

            </ul>

            <ul className={s.rankNumbers}>
              {
                rankNumbers.map((number, ind) => {
                  return (
                    <li className={cn(s.rankNumberItem, {
                      [s.rankNumberItemActive]: selectedNumber === number.value - 1
                    })}

                        key={ind}
                        onClick={() => setSelectedNumber(number.value - 1)}
                    >
                      <img src={number.numberImg} alt=""/>
                    </li>
                  )
                })
              }
            </ul>

            <div className={s.dropdowns}>
              <div className={s.dropdown}>
                <Select options={testOptions} selectChangeHandler={selectCurrentLPHandler}
                        placeholder='Select Current LP'/>
              </div>
              <div className={s.dropdown}>
                <Select options={testOptions} selectChangeHandler={selectLPGain} placeholder='Select LP Gain'/>
              </div>
            </div>
          </div>


          <div className={s.generalRankBlock}>
            <div className={s.headerWrapper}>
              <div>
                <img className={s.headerImg} src={rankPictures[selectedDesiredImg].img} alt="rank image" width="50"
                     height="50"/>
              </div>
              <h3 className={s.rankHeader}>Desired Rank</h3>
            </div>
            <ul className={s.rankImgs}>
              {
                rankPictures.map((img, ind) => {
                  return (
                    <li className={cn(s.rankImgItem, {
                      [s.rankImgItemActive]: selectedDesiredImg === img.value
                    })}

                        key={ind}
                        onClick={() => setSelectedDesiredImg(img.value)}

                    >
                      <img src={img.img} alt=""/>
                    </li>
                  )
                })
              }

            </ul>

            <ul className={s.rankNumbers}>
              {
                rankNumbers.map((number, ind) => {
                  return (
                    <li className={cn(s.rankNumberItem, {
                      [s.rankNumberItemActive]: selectedDesiredNumber === number.value - 1
                    })}

                        key={ind}
                        onClick={() => setSelectedDesiredNumber(number.value - 1)}
                    >
                      <img src={number.numberImg} alt=""/>
                    </li>
                  )
                })
              }
            </ul>

            <div className={s.dropdowns}>
              <div className={s.dropdown}>
                <Select options={testOptions} selectChangeHandler={selectServer} placeholder='Select Server'/>
              </div>

              <div className={s.dropdown}>
                <Select options={testOptions} selectChangeHandler={selectType} placeholder='Select Type'/>
              </div>


            </div>

          </div>

        </div>
        <div className={s.checkoutPart}>
          <h3 className={s.rankHeader}>Checkout</h3>
          <p className={s.subtitle}>Selected booting service</p>
          <div className={s.checkoutRanks}>
            <div className={s.ranksWrapper}>
              <div className={s.ranksImgWrapper}>
                <div className={cn(s.rankImgItem, s.rankImgItemActive)}>
                  <img src={rankPictures[selectedImg].img} alt="selected rank"/>
                </div>
                <div className={cn(s.rankNumberItem, s.rankNumberItemActive)}>
                  <img src={rankNumbers[selectedNumber].numberImg} alt="selected rank"/>
                </div>
              </div>
              <div className={s.rankText}>
                {rankPictures[selectedImg].name} {rankNumbers[selectedNumber].value}
              </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
              <path d="M10.5 24L38.5 24" stroke="#0EF3CA" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round"/>
              <path d="M24.5 10L38.5 24L24.5 38" stroke="#0EF3CA" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg>

            <div className={s.ranksWrapper}>
              <div className={s.ranksImgWrapper}>
                <div className={cn(s.rankImgItem, s.rankImgItemActive)}>
                  <img src={rankPictures[selectedDesiredImg].img} alt="selected rank"/>
                </div>
                <div className={cn(s.rankNumberItem, s.rankNumberItemActive)}>
                  <img src={rankNumbers[selectedDesiredNumber].numberImg} alt="selected rank"/>
                </div>
              </div>

              <div className={s.rankText}>
                {rankPictures[selectedDesiredImg].name} {rankNumbers[selectedDesiredNumber].value}
              </div>
            </div>
          </div>
          <div className={s.additionalServicesBlock}>
            <h3 className={s.rankHeader}>Additional services</h3>
            <ul className={s.servicesList}>
              {
                services.map((service, index) => <Service service={service} key={index} onCheck={checkHandler}/>)
              }
            </ul>
          </div>
          <div className={s.totalAmount}>
            <p className={s.totalText}>Total Amount</p>
            <p className={s.totalSum}>
              {formatter.format(totalAmount)}
            </p>
          </div>
          <button onClick={() => console.log('total amount =', totalAmount)} className={s.btn}>
            <span className={s.btnText}>rank up now</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <g clipPath="url(#clip0_96_880)">
                <path d="M23.5 6L14 15.5L9 10.5L1.5 18" stroke="#00483B" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M17.5 6H23.5V12" stroke="#00483B" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_96_880">
                  <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                </clipPath>
              </defs>
            </svg>
          </button>
          <p className={s.bottomText}>Approximate completion time: 7-11 days</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
