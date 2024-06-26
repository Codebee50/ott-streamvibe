import { heroBackgroundImageList } from "../assets/heroimages";
import RedButton from "../components/RedButton";
import SectionHeader from "../components/SectionHeader";
import SectionWrapper from "../components/SectionWrapper";

const StartFreeTrialSection = () => {
  const shuffled = heroBackgroundImageList.sort(() => Math.random() - 0.5);
  return (
    <SectionWrapper>
      <section className="w-full min-h-[60vh] bg-page-black padding-x max-container md:pt-[8vh]">
        <div className="w-full h-[350px] sm:h-[300px] overflow-y-hidden relative rounded-lg border-[2px] border-black10 ">
          <div className="w-full grid gap-[5px] grid-cols-small breakcon:grid-cols-large ">
            {shuffled.map((image, index) => (
              <div className="h-[130px] sm:h-[80px]" key={index}>
                <img
                  src={image}
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </div>
            ))}
          </div>

          <div className="absolute w-full h-full z-10 top-0 bg-gradient-to-r from-black06 to-trans-red2 from-10% via-40%  via-trans-3  flex items-center justify-center">
            <div className="w-full px-5 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between flex-wrap gap-4">
              <SectionHeader
                className={
                  "max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:text-center"
                }
                largeText={"Start your free trial today!"}
                smallText={
                  "This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe."
                }
              />
              <RedButton text={"Start a Free Trial"} />
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default StartFreeTrialSection;
