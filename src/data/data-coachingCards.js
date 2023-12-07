import img1 from "@/assets/coachingCards/1-Master.png"
import img2 from "@/assets/coachingCards/2-Grandmaster.png"
import img3 from "@/assets/coachingCards/3-Challenger.png"

export const coachingCards = [
  {
    img: img1,
    titleStart: 'Master',
    titleEnd: 'Coaching',
    text: 'Individual Coaching Session carried out by verified MBS Master Coach/Booster',
    priceFrom: 50,
    options: [
      {
        value: 1,
        label: '1 hour',
      },
      {
        value: 2,
        label: '3 hour',
      },
      {
        value: 3,
        label: '4 hour',
      },
    ]
  },

  {
    img: img2,
    titleStart: 'GrandMaster',
    titleEnd: 'Coaching',
    text: 'Individual Coaching Session carried out by verified MBS Master Coach/Booster',
    priceFrom: 70,
    options: [
      {
        value: 1,
        label: '1 hour',
      },
      {
        value: 2,
        label: '2 hour',
      },
      {
        value: 3,
        label: '2 hour',
      },
     ]
  },

  {
    img: img3,
    titleStart: 'Challenger',
    titleEnd: 'Coaching',
    text: 'Individual Coaching Session carried out by verified MBS Master Coach/Booster',
    priceFrom: 90,
    options: [
      {
        value: 1,
        label: '1 hour',
      },
      {
        value: 2,
        label: '2 hour',
      },
      {
        value: 3,
        label: '3 hour',
      },
    ]
  },
]
