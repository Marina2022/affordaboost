import s from './Checkout.module.scss';
import {
  additionalServices, currentLPOptions, LPGainOptions,
  rankNumbers,
  ranks, serverOptions,
} from "@/data/data-chechout.js";
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

  const submitBtnDisabled = (selectedImg > selectedDesiredImg) || (selectedImg === selectedDesiredImg && selectedNumber >= selectedDesiredNumber)
  || (selectedImg > 6 && selectedImg === selectedDesiredImg )

  // dropdowns values (can be used in total amount formula)
  const [currentLP, setCurrentLP] = useState(null)
  const [LPGain, setLPGain] = useState(null)
  const [server, setServer] = useState(null)

  const [inputtedCurrentLP, setInputtedCurrentLP] = useState(null)
  const [inputtedDesiredLP, setInputtedDesiredLP] = useState(null)

  // additional services object
  const [services, setServices] = useState(additionalServices)

  //onChange handlers
  const selectCurrentLPHandler = ({value}) => setCurrentLP(value)
  const selectLPGain = ({value}) => setLPGain(value)
  const selectServer = ({value}) => setServer(value)

  const inputCurrentLPHandler = (e) => setInputtedCurrentLP(+e.target.value)
  const inputDesiredLPHandler = (e) => setInputtedDesiredLP(+e.target.value)

  const checkHandler = (title) => {
    const newServices = services.map((service) => {
        if (service.title === title) return {...service, on: !service.on}
        return service
      }
    )
    setServices(newServices)
  }

  // counting additional services sum:
  const additionalServicesPercentSum = services.reduce((acc, item) => acc + (item.on ? item.price : 0), 0)


  // counting rank changing price

  let rankChangingPrice = 0

  const diffArray = ranks.slice(selectedImg, selectedDesiredImg + 1)

  if (diffArray.length) {

    let sum = 0
    for (let i = 0; i < diffArray.length - 1; i++) {
      if (diffArray[i].value > 6) {
        if (diffArray[i + 1])
          sum += diffArray[i + 1].flatRate
      } else {
        sum += diffArray[i].divisionPrice * 4
      }
    }

    const subtractDivisionsPriceFromStart = (4 - rankNumbers[selectedNumber].value) * diffArray[0].divisionPrice
    const addDivisionsPriceFromEnd = (4 - rankNumbers[selectedDesiredNumber].value) * diffArray[diffArray.length - 1].divisionPrice

    // console.log('subtractDivisionsPriceFromStart', subtractDivisionsPriceFromStart)
    // console.log('addDivisionsPriceFromEnd', addDivisionsPriceFromEnd)

    rankChangingPrice = sum - subtractDivisionsPriceFromStart + addDivisionsPriceFromEnd
    // console.log('rankChangingPrice', rankChangingPrice)
  }

  if (rankChangingPrice < 0) rankChangingPrice = 0

  const totalAmount = rankChangingPrice * (1 + additionalServicesPercentSum)


  const formatter = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  });

  const submitHandler = (e) => {
    e.preventDefault()
    console.log({
      selectedCurrentLP: currentLP,
      LPGain,
      selectedServer: server,
      currentRank: ranks[selectedImg].name,
      currentDivision: rankNumbers[selectedNumber].value,
      desiredRank: ranks[selectedDesiredImg].name,
      desiredDivision: rankNumbers[selectedDesiredNumber].value,
      totalAmount,
      services,
      inputedCurrentLP: inputtedCurrentLP,
      inputedDesiredLP: inputtedDesiredLP
    })
  }

  return (
    <div className={s.checkoutBlock}>
      <form className={s.wrapper} onSubmit={submitHandler}>
        <div className={s.ranksPart}>
          <div className={s.generalRankBlock}>
            <div className={s.headerWrapper}>
              <div>
                <img className={s.headerImg} src={ranks[selectedImg].img} alt="rank image" width="50"
                     height="50"/>
              </div>
              <h3 className={s.rankHeader}>Current Rank</h3>
            </div>

            {/*current rank block*/}

            <ul className={s.rankImgs}>
              {
                ranks.map((img, ind) => {
                  return (
                    <li className={cn(s.rankImgItem, {
                      [s.rankImgItemActive]: selectedImg === img.value
                    })}

                        key={ind}
                        onClick={() => {
                          setSelectedImg(img.value)
                        }}
                    >
                      <img src={img.img} alt="img"/>
                    </li>
                  )
                })
              }
            </ul>
            {
              selectedImg < 7 && <ul className={s.rankNumbers}>
                {
                  rankNumbers.map((number, ind) => {
                    return (
                      <li className={cn(s.rankNumberItem, {
                        [s.rankNumberItemActive]: selectedNumber === ind
                      })}
                          key={ind}
                          onClick={() => setSelectedNumber(ind)}
                      >
                        <img src={number.numberImg} alt=""/>
                      </li>
                    )
                  })
                }
              </ul>
            }

            <div className={s.dropdowns}>
              <div className={s.dropdown}>
                {
                  selectedImg < 7 && <Select options={currentLPOptions} selectChangeHandler={selectCurrentLPHandler}
                                             placeholder='Select Current LP'/>
                }
                {
                  selectedImg >= 7 && <input className={s.input} type="number" placeholder="Enter Current LP"
                                             onChange={inputCurrentLPHandler}/>
                }
              </div>
              <div className={s.dropdown}>
                <Select options={LPGainOptions} selectChangeHandler={selectLPGain} placeholder='Select LP Gain'/>
              </div>
            </div>
          </div>

          {/*desired rank block */}
          <div className={s.generalRankBlock}>
            <div className={s.headerWrapper}>
              <div>
                <img className={s.headerImg} src={ranks[selectedDesiredImg].img} alt="rank image" width="50"
                     height="50"/>
              </div>
              <h3 className={s.rankHeader}>Desired Rank</h3>
            </div>
            <ul className={s.rankImgs}>
              {
                ranks.map((img, ind) => {
                  return (
                    <li className={cn(s.rankImgItem, {
                      [s.rankImgItemActive]: selectedDesiredImg === img.value
                    })}

                        key={ind}
                        onClick={() => {
                          setSelectedDesiredImg(img.value)
                        }}
                    >
                      <img src={img.img} alt=""/>
                    </li>
                  )
                })
              }
            </ul>


            {
              selectedDesiredImg < 7 && <ul className={s.rankNumbers}>
                {
                  rankNumbers.map((number, ind) => {
                    return (
                      <li className={cn(s.rankNumberItem, {
                        [s.rankNumberItemActive]: selectedDesiredNumber === ind
                      })}

                          key={ind}
                          onClick={() => {
                            setSelectedDesiredNumber(ind)
                          }}
                      >
                        <img src={number.numberImg} alt=""/>
                      </li>
                    )
                  })
                }
              </ul>
            }

            <div className={s.dropdowns}>
              {/*{*/}
              {/*  selectedDesiredImg >= 7 && <div className={s.dropdown}>*/}
              {/*    <input className={s.input} type="number" placeholder="Enter Desired LP" onChange={inputDesiredLPHandler} />*/}
              {/*  </div>*/}
              {/*}*/}
              <div className={s.dropdown}>
                <Select options={serverOptions} selectChangeHandler={selectServer} placeholder='Select Server'/>
              </div>
            </div>
          </div>
        </div>

        <div className={s.checkoutPart}>
          <h3 className={s.rankHeader}>Checkout</h3>
          <p className={s.subtitle}>Selected boosting service</p>
          <div className={s.checkoutRanks}>
            <div className={s.ranksWrapper}>
              <div className={s.ranksImgWrapper}>
                <div className={cn(s.rankImgItem, s.rankImgItemActive)}>
                  <img src={ranks[selectedImg].img} alt="selected rank"/>
                </div>

                {
                  selectedImg < 7 && <div className={cn(s.rankNumberItem, s.rankNumberItemActive)}>
                    <img src={rankNumbers[selectedNumber].numberImg} alt="selected rank"/>
                  </div>
                }
              </div>

              {
                selectedImg < 7 && <div className={s.rankText}>
                  {ranks[selectedImg].name} {rankNumbers[selectedNumber].value}
                </div>
              }
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
                  <img src={ranks[selectedDesiredImg].img} alt="selected rank"/>
                </div>

                {
                  selectedDesiredImg < 7 && <div className={cn(s.rankNumberItem, s.rankNumberItemActive)}>
                    <img src={rankNumbers[selectedDesiredNumber].numberImg} alt="selected rank"/>
                  </div>
                }
              </div>

              {
                selectedDesiredImg < 7 && <div className={s.rankText}>
                  {ranks[selectedDesiredImg].name}&nbsp;{rankNumbers[selectedDesiredNumber].value}
                </div>
              }

            </div>
          </div>
          <div className={s.additionalServicesBlock}>
            <h3 className={s.rankHeader}>Additional services</h3>
            <ul className={s.servicesList}>
              {
                services.map((service, index) => <Service service={service} key={index} onCheck={checkHandler}
                                                          playWithBoosterDisabled={selectedDesiredImg > 6 || selectedImg > 6}/>)
              }
            </ul>
          </div>
          <div className={s.totalAmount}>
            <p className={s.totalText}>Total Amount</p>
            <p className={s.totalSum}>
              {formatter.format(totalAmount)}
            </p>
          </div>
          <button className={s.btn} disabled={submitBtnDisabled}>
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
      </form>
    </div>
  );
};

export default Checkout;
