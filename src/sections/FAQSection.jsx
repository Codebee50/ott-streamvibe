import FaqItem from "../components/FaqItem";
import RedButton from "../components/RedButton";
import SectionHeader from "../components/SectionHeader";
import { faqList } from "../constants";
import { useState } from "react";

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(0);


  const openFaqHandler = (index) => {
    setOpenFaq((prev)=>{
      console.log('prev', prev)
      return index === prev ? 0 : index
    });
  };

  // console.log('openfaq',openFaq)

  return (
    <section className="w-full min-h-[60vh] bg-page-black padding-x pt-[5vh] pb-[5vh]">
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between">
        <SectionHeader
          largeText={"Frequently Asked Questions"}
          smallText={
            "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
          }
        />

        <div className="mt-4">
          <RedButton text={"Ask a Question"} />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 tablet:grid-cols-2 mt-20 gap-9 sm:px-9">
        {faqList.map((faq, index) => (
          <FaqItem key={faq.question} {...faq} index={index+1} onOpenFaq={openFaqHandler} open={(index+1)===openFaq}/>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
