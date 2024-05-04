import LinkFlex from "../components/LinkFlex";
import { footerItems } from "../constants";
import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";
import SectionWrapper from "../components/SectionWrapper";

const Footer = () => {
  return (
    <SectionWrapper>
      <footer className="w-full pt-20  padding-x max-container bg-page-black">
        <div className="flex flex-col">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 pb-20 gap-14 justify-between ">
            {footerItems.map((footerItem, index) => (
              <LinkFlex key={`footeritm${index}`} items={footerItem} />
            ))}

            <div className="flex flex-col">
              <a
                className={`text-[1.1rem] font-semibold text-white mb-[2px] font-manrope `}
              >
                Connect with us
              </a>
              <div className="flex flex-row items-center mt-3 gap-2 flex-wrap">
                <div className=" bg-black10 text-white p-2 flex shrink-0 rounded-md border-[1px] border-strokeBlack">
                  <IoLogoFacebook size={"1.2em"} />
                </div>
                <div className=" bg-black10 text-white p-2 flex shrink-0 rounded-md border-[1px] border-strokeBlack">
                  <IoLogoTwitter size={"1.2em"} />
                </div>
                <div className=" bg-black10 text-white p-2 flex shrink-0 rounded-md border-[1px] border-strokeBlack">
                  <IoLogoLinkedin size={"1.2em"} />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-strokeBlack py-9  border-t flex flex-wrap gap-5 flex-row items-center justify-between w-full">
            <p className="font-manrope text-gray60 text-[0.7rem] sm:text-sm font-normal">
              @2024 built by codebee
            </p>

            <div className="flex flex-row items-center gap-2">
              <div className="border-r-strokeBlack border-r pr-2">
                <p className="font-manrope text-gray60 text-[0.7rem]  sm:text-sm font-normal">
                  Terms of Use
                </p>
              </div>
              <div className="border-r-strokeBlack border-r pr-2">
                <p className="font-manrope text-gray60 text-[0.7rem] sm:text-sm font-normal">
                  Privacy Policy
                </p>
              </div>
              <div className="border-r-strokeBlack border-r pr-2">
                <p className="font-manrope text-gray60 text-[0.7rem] sm:text-sm font-normal">
                  Cookie Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </SectionWrapper>
  );
};

export default Footer;
