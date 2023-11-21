import FaqItem from "@/components/ui/Faq/FaqItem/FaqItem.jsx";

const Faq = ({data, classname}) => {
  return (
      <ul className={classname}>
        {
          data.map((item, index) => <FaqItem key={index} faqItem={item}/>)
        }
      </ul>
  );
};

export default Faq;
