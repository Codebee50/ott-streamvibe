import { useEffect, useState } from "react";
import SectionWrapper from "../../components/SectionWrapper";
import TableData from "../../components/SubscriptionTable.jsx/TableData";
import TableHead from "../../components/SubscriptionTable.jsx/TableHead";
import TextL from "../../components/TextL";
import TextSm from "../../components/TextSm";
import Toggler from "../../components/Toggler";
import { featureList, featureTypes } from "../../constants";
import { featureValueList } from "../../constants";
import HeadingAndBody from "../../components/SubscriptionTable.jsx/HeadingAndBody";
import BgBlackStrokeCard from "../../components/BgBlackStrokeCard";

const SubscriptionSection = () => {
  const [selectedTab, setSelectedTab] = useState(featureTypes[0]);
  const [selectedValue, setSelectedValue] = useState({});

  useEffect(() => {
    setSelectedValue(featureValueList.find((f) => f.type === selectedTab));
  }, [selectedTab]);

  function makeTableHead() {
    return (
      <thead>
        <tr>
          <TableHead content="Features" />
          {featureTypes.map((type) => (
            <TableHead content={type} key={type} />
          ))}
        </tr>
      </thead>
    );
  }
  function toCamelCase(text) {
    return text
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  }

  function getFeatureValue(featureType, property) {
    const featureValue = featureValueList.find((f) => f.type === featureType);
    return featureValue[property] || "-";
  }

  function makeTableRow(item) {
    const camelVerson = toCamelCase(item);

    return (
      <tr>
        <TableData content={item} />
        {featureTypes.map((feature) => {
          return (
            <TableData
              key={feature}
              content={getFeatureValue(feature, camelVerson)}
            />
          );
        })}
      </tr>
    );
  }

  function makeTableBody() {
    return featureList.map((item) => {
      return makeTableRow(item);
    });
  }
  return (
    <SectionWrapper>
      <section className="w-full max-container min-h-[50vh] bg-page-black flex flex-col padding-x pb-10 gap-10">
        <div className="mt-7 flex flex-col">
          <TextL text="Compare our plans and find the right one for you" />
          <TextSm
            text={`StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.`}
          />
        </div>

        <div className="w-full">
          <table className="w-full rounded-lg border-collapse text-start items-start table-fixed max-sm:hidden">
            {makeTableHead()}
            {makeTableBody()}
          </table>

          <div className="w-full sm:hidden flex flex-col">
            <Toggler
              options={featureTypes}
              onToggle={(option) => {setSelectedTab(option)}}
              selected={selectedTab}
              full={true}
            />

            <div className="w-full">
              <BgBlackStrokeCard
                className="w-full flex flex-col mt-4 px-10 py-5 rounded-xl"
                full={true}
              >
                <div className="w-full grid grid-cols-2 max-[370px]:grid-cols-1 gap-4">
                  <HeadingAndBody
                    contentText={selectedValue?.price}
                    headingText={"Price"}
                  />
                  <HeadingAndBody
                    contentText={selectedValue?.freeTrial}
                    headingText={"Free Trial"}
                  />
                </div>

                <HeadingAndBody
                  contentText={selectedValue?.content}
                  headingText={"Content"}
                  className="mt-7"
                />
                <HeadingAndBody
                  contentText={selectedValue?.devices}
                  headingText={"Devices"}
                  className="mt-7"
                />

                <div className="w-full grid grid-cols-2 max-[370px]:grid-cols-1 mt-7 gap-4">
                  <HeadingAndBody
                    contentText={selectedValue?.cancelAnytime}
                    headingText={"Cancel Anytime"}
                  />
                  <HeadingAndBody
                    contentText={selectedValue?.hDR}
                    headingText={"HDR"}

                  />
                </div>


                <div className="w-full grid grid-cols-2 max-[370px]:grid-cols-1 mt-7 gap-4">
                  <HeadingAndBody
                    contentText={selectedValue?.dolbyAtmos}
                    headingText={"Dolby Atmos"}
                  />
                  <HeadingAndBody
                    contentText={selectedValue?.adFree}
                    headingText={"Ad - Free"}
                  />
                </div>


                <div className="w-full grid grid-cols-2 max-[370px]:grid-cols-1 mt-7 gap-4">
                  <HeadingAndBody
                    contentText={selectedValue?.offlineViewing}
                    headingText={"Offline Viewing"}
                  />
                  <HeadingAndBody
                    contentText={selectedValue?.familySharing}
                    headingText={"Family Sharing"}
                  />
                </div>
              </BgBlackStrokeCard>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default SubscriptionSection;
