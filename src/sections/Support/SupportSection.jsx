import SectionHeader from "../../components/SectionHeader";
import SectionWrapper from "../../components/SectionWrapper";
import { heroBackgroundImageList } from "../../assets/heroimages";
import LabelAndInput from "../../components/LabelAndInput";
import InputGrid from "../../components/InputGrid";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Checkbox } from "antd";
import AntdUiConfig from "../../store/AntdUiConfig";
import RedButton from "../../components/RedButton";

const SupportSection = () => {
  const [selected, setSelected] = useState("NG");

  return (
    <SectionWrapper>
      <section className="w-full max-container min-h-[50vh] bg-page-black flex flex-col s-4:flex-row items-stretch padding-x py-20 gap-10">
        <div className="w-full s-4:w-[40%] flex flex-col">
          <SectionHeader
            largeText="Welcome to our support page!"
            smallText="We're here to help you with any problems you may be having with our product."
          />

          <div className="w-full grid h-[430px] overflow-y-hidden gap-[7px] grid-cols-small breakcon:grid-cols-large mt-4 border-2 border-strokeBlack">
            {heroBackgroundImageList.map((image, index) => (
              <div
                className="h-[110px] breakcon:h-[130px] rounded-md"
                key={index}
              >
                <img
                  src={image}
                  className="w-full rounded-xl h-full object-cover object-center"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full s-4:w-[60%] h-full">
          <div className="py-10 px-10 border border-strokeBlack bg-black08 w-full h-full rounded-lg flex flex-col gap-8">
            <InputGrid className="w-full grid grid-cols-2 gap-3">
              <LabelAndInput
                label="First Name"
                placeholder="Enter First Name"
              />
              <LabelAndInput label="Last Name" placeholder="Enter Last Name" />
            </InputGrid>

            <div className="w-full grid xl:grid-cols-2 gap-8 xl:gap-3">
              <LabelAndInput label="Email" placeholder="Enter Your Email" />

              <div className="w-full">
                <p className="text-white font-manrope font-semibold">
                  Phone number
                </p>
                <div className="mt-2 flex flex-row w-full items-center gap-2 flex-wrap ">
                  <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                    showSelectedLabel={false}
                    selectButtonClassName="w-[70px] p-2"
                    selectedSize={14}
                    fullWidth={false}
                  />

                  <input
                    type="text"
                    className="w-[50%] bg-black08 border border-strokeBlack p-4 font-manrope text-white placeholder:text-gray60 rounded-md outline-strokeBlack focus:border-strokeBlack "
                    placeholder={"Enter Phone Number"}
                  />
                </div>
              </div>
            </div>

            <div className="w-full">
              <p className="text-white font-manrope font-semibold">Message</p>
              <textarea
                className="w-full bg-black08 border border-strokeBlack p-4 mt-2 font-manrope text-white placeholder:text-gray60 rounded-md outline-strokeBlack focus:border-strokeBlack"
                rows={5}
                placeholder="Enter your Message"
              ></textarea>
            </div>

            <div className="w-full flex flex-row max-[450px]:flex-col max-[450px]:items-start gap-4 items-center justify-between">
              <div>
                <AntdUiConfig>
                  <Checkbox
                    onChange={() => {}}
                    className="font-manrope text-gray60"
                  >
                    I agree with Terms of Use and Privacy Policy
                  </Checkbox>
                </AntdUiConfig>
              </div>

              <RedButton text="Send Message" />
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default SupportSection;
