import { useState } from "react";
import PlanCard from "../components/PlanCard";
import SectionHeader from "../components/SectionHeader";
import Toggler from "../components/Toggler";
import { planList } from "../constants";

const PlanShowcaseSection = () => {
    const [duration, setDuration] = useState('monthly')

    function toggleHandler(option){
        setDuration(option.toLowerCase())
    }

  return (
    <section className="w-full min-h-[60vh] bg-page-black padding-x pt-[5vh] pb-[10vh]">
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between">

        <SectionHeader
          largeText={"Choose the plan that's right for you"}
          smallText={
            "Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
          }
        />

        <div className="mt-4">
            <Toggler options={['Monthly','Yearly']} selected={duration==='monthly'?'Monthly':'Yearly'} onToggle={toggleHandler}/>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {
            planList.map((plan)=>(
                <PlanCard key={plan.name} {...plan} buff={duration=='monthly'? 1: 11} term={duration=='monthly'?'month': 'year'}/>
            ))
        }
      </div>
    </section>
  );
};

export default PlanShowcaseSection;
