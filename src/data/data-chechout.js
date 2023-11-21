import img1 from '@/assets/checkout/imgs/img1.svg'
import img2 from '@/assets/checkout/imgs/img2.svg'
import img3 from '@/assets/checkout/imgs/img3.svg'
import img4 from '@/assets/checkout/imgs/img4.svg'
import img5 from '@/assets/checkout/imgs/img5.svg'
import img6 from '@/assets/checkout/imgs/img6.svg'
import img7 from '@/assets/checkout/imgs/img7.svg'
import img8 from '@/assets/checkout/imgs/img8.svg'
import img9 from '@/assets/checkout/imgs/img9.svg'
import img10 from '@/assets/checkout/imgs/img10.svg'

import numberImg1 from '@/assets/checkout/numbers/num1.svg'
import numberImg2 from '@/assets/checkout/numbers/num2.svg'
import numberImg3 from '@/assets/checkout/numbers/num3.svg'
import numberImg4 from '@/assets/checkout/numbers/num4.svg'


export const ranks = [
  {value: 0, img: img1, name: 'Iron', divisionPrice: 7},
  {value: 1, img: img2, name: 'Bronze', divisionPrice: 7},
  {value: 2, img: img3, name: 'Silver', divisionPrice: 8},
  {value: 3, img: img4, name: 'Gold', divisionPrice: 10},
  {value: 4, img: img5, name: 'Platinum', divisionPrice: 15},
  {value: 5, img: img6, name: 'Emerald', divisionPrice: 25},
  {value: 6, img: img7, name: 'Diamond', divisionPrice: 50},
  {value: 7, img: img8, name: 'Master', divisionPrice: null},
  {value: 8, img: img9, name: 'Grandmaster', divisionPrice: null, flatRate: 700},
  {value: 9, img: img10, name: 'Challenger', divisionPrice: null, flatRate: 1200},
]

export const rankNumbers = [
  {value: 4, numberImg: numberImg4},
  {value: 3, numberImg: numberImg3},
  {value: 2, numberImg: numberImg2},
  {value: 1, numberImg: numberImg1},

]

export const additionalServices = [
  {id: 1, title: 'Play With Booster', price: 0.3, on: false},
  {id: 2, title: 'Appear Offline On Chat', price: 0, on: false},
  {id: 3, title: 'Priority Order', price: .5, on: false},
  {id: 4, title: 'Stream Games', price: .2, on: false},
]


export const currentLPOptions = [
  {label: '0-20LP', value: '0-20LP'},
  {label: '21-40LP', value: '21-40LP'},
  {label: '41-60LP', value: '41-60LP'},
  {label: '61-80LP', value: '61-80LP'},
  {label: '81-100LP', value: '81-100LP'},
]

export const LPGainOptions = [
  {label: '20 or less', value: '20 or less'},
  {label: '20 or more', value: '20 or more'},
]

export const serverOptions = [
  {label: 'EUW', value: 'EUW'},
  {label: 'EUNE', value: 'EUNE'},
  {label: 'NA', value: 'NA'},
  {label: 'TR', value: 'TR'},
]


