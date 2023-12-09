import Hero from "@/components/features/HomePage/Hero/Hero.jsx";
import WhyChooseUs from "@/components/features/HomePage/WhyChooseUs/WhyChooseUs.jsx";
import FaqBlock from "@/components/features/HomePage/FaqBlock/FaqBlock.jsx";
import {useEffect} from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  // function download(filename, text) {
  //   let element = document.createElement('a');
  //   element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  //   element.setAttribute('download', filename);
  //
  //   element.style.display = 'none';
  //   document.body.appendChild(element);
  //
  //   element.click();
  //
  //   document.body.removeChild(element);
  // }

  const onSubmit = async (e) => {
    e.preventDefault()
    // download('mama.txt', 'trulala')

    const resp = await fetch('https://namegenerator.com/ai/generate/city-names',
      {
        method: "post",
        //  headers: {
        //    'Content-Type': 'application/json',
        //  },
        body: JSON.stringify( {
          size: "medium town",
          keywords: "elvish, dwarfish, feminine, light",
          terrain: "mountainous",
          description: "It is a hidden city "
        })
      }
    )
    const res = await resp.json()
    console.log(res)
  }

  return (
    <>

      <form onSubmit={onSubmit} style={{marginTop: 100}}>
        <input type="text" name="name"/>
        <textarea></textarea>
        <button style={{marginTop:100}}>submit</button>
      </form>

      <Hero/>
      <WhyChooseUs/>
      <FaqBlock/>
    </>
  );
};

export default Home;
