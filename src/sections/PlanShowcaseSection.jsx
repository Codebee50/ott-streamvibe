import PlanCard from "../components/PlanCard";
import SectionHeader from "../components/SectionHeader";
import Toggler from "../components/Toggler";
import { planList } from "../constants";

const PlanShowcaseSection = () => {
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
            <Toggler options={['Monthly','Yearly']} selected={'Monthly'}/>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {
            planList.map((plan)=>(
                <PlanCard key={plan.name} {...plan} buff={1} term={'month'}/>
            ))
        }
      </div>
    </section>
  );
};

export default PlanShowcaseSection;
